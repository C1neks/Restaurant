import express from "express";

import { ProductService } from "../services/ProductService.js";

import { Repository } from "../repository/repository.js";

import Product from "../models/productModel.js";
import { fileStorageEngine, fileFilter } from "./upload.js";
import multer from "multer";
import { ProductRatingService } from "../services/ProductRatingService.js";
const router = express.Router();

const upload = multer({ storage: fileStorageEngine, fileFilter: fileFilter });
const productRepository = new Repository(Product);
export const productService = new ProductService(
  productRepository,
  new ProductRatingService(productRepository)
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
