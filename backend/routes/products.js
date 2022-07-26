import express from "express";

import { ProductService } from "../services/ProductService.js";

import { Repository } from "../repository/repository.js";

import Product from "../models/productModel.js";

import S3 from "aws-sdk/clients/s3.js";
import multer from "multer";
import multerS3 from "multer-s3";

import { ProductRatingService } from "../services/ProductRatingService.js";
import { CategoryService } from "../services/CategoryService.js";
import Category from "../models/categoryModel.js";
import ProductRating from "../models/productRatingModel.js";

const router = express.Router();

const s3 = new S3({
  region: process.env.REGION,
});

const uploadS3 = multer({
  storage: multerS3({
    s3: s3,

    bucket: "resturant.image.bucket",

    key: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  }),
});
const productRepository = new Repository(Product);

export async function parseJwt(token) {
  try {
    const base64Payload = token.split(".")[1];

    const payload = Buffer.from(base64Payload, "base64");

    return JSON.parse(payload.toString());
  } catch (error) {
    return undefined;
  }
}

const categoryService = new CategoryService(new Repository(Category));
export const productRatingService = new ProductRatingService(
  new Repository(ProductRating),
  categoryService
);
export const productService = new ProductService(
  productRepository,
  productRatingService,
  categoryService
);
router.get("/", async (req, res) => {
  const response = await productService.getProducts();
  res.send(response);
});

router.post("/", uploadS3.single("image"), async (req, res) => {
  const { name, price, category, description } = req.body;

  const image = req.file.location;

  const response = await productService.createProduct(
    name,
    price,
    category,
    description,
    image
  );

  res.send(response);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const authHeader = req.headers["authorization"];

  const userDetails = await parseJwt(authHeader);

  const currentlyLoggedInUserId = userDetails._id;

  const product = await productService.getProductById(id);
  const ratings = await productRatingService.getProductRatingById(id);

  const response = {
    _id: product.data._id,
    name: product.data.name,
    price: product.data.price,
    category: product.data.category,
    description: product.data.description,
    image: product.data.image,
    rating: ratings.data.rating,
    numberOfRates: ratings.data.numberOfRatings,
    ratedByCurrentUser: !!ratings.data.usersWhoRated[currentlyLoggedInUserId],
  };

  res.send(response);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await productService.deleteProduct(id);
  res.send(response);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await productService.updateProduct(id, body);
  res.send(response);
});

router.patch("/rating/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const response = await productService.productRatingService.updateRating(
    id,
    body
  );
  res.send(response);
});

export default router;
