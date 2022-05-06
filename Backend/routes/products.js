import express from "express";

import { ProductService } from "../services/ProductService.js";

import { Repository } from "../repository/repository.js";

import Product from "../models/productModel.js";

import S3 from "aws-sdk/clients/s3.js";
import multer from "multer";
import multerS3 from "multer-s3";

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

export const productService = new ProductService(new Repository(Product));
router.get("/", async (req, res) => {
  const response = await productService.getProducts();
  res.send(response);
});

router.post("/", uploadS3.single("image"), async (req, res) => {
  const { name, price, category, description, rating, numberOfRates } =
    req.body;

  const image = req.file.filename;

  const response = await productService.createProduct(
    name,
    price,
    category,
    description,
    image,
    rating,
    numberOfRates
  );

  res.send(response);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await productService.getProductById(id);
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

  const response = await productService.updateRating(id, body);
  res.send(response);
});

export default router;
