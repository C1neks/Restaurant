import express from "express";

import { ProductService } from "../services/ProductService.js";

import { Repository } from "../repository/repository.js";

import Product from "../models/productModel.js";
import { fileStorageEngine, fileFilter } from "./upload.js";
import multer from "multer";
import { ProductRatingService } from "../services/ProductRatingService.js";
import { CategoryService } from "../services/CategoryService.js";
import Category from "../models/categoryModel.js";
import ProductRating from "../models/productRatingModel.js";

const router = express.Router();

const upload = multer({ storage: fileStorageEngine, fileFilter: fileFilter });

export const productService = new ProductService(
  new Repository(Product),
  new ProductRatingService(
    new Repository(ProductRating),
    new CategoryService(new Repository(Category))
  ),
  new CategoryService(new Repository(Category))
);
router.get("/", async (req, res) => {
  const response = await productService.getProducts();
  res.send(response);
});

router.post("/", upload.single("image"), async (req, res) => {
  const {
    name,
    price,
    category,
    description,
    usersVoted,
    rating,
    numberOfRates,
  } = req.body;

  const image = req.file.filename;

  const response = await productService.createProduct(
    name,
    price,
    category,
    description,
    image,
    usersVoted,
    rating,
    numberOfRates
  );
  res.send(response);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await productService.getProductById(id);
  const ratings =
    await productService.productRatingService.getProductRatingById(id);

  const response = {
    _id: product.data._id,
    name: product.data.name,
    price: product.data.price,
    category: product.data.category,
    description: product.data.description,
    image: product.data.image,
    rating: ratings.data.rating,
    numberOfRates: ratings.data.numberOfRatings,
    usersWhoRated: ratings.data.usersWhoRated,
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
