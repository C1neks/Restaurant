import express from "express";

import { ProductService } from "../services/ProductService.js";

import { Repository } from "../repository/repository.js";

import Product from "../models/productModel.js";

const router = express.Router();
export const productService = new ProductService(new Repository(Product));
router.get("/", async (req, res) => {
  const response = await productService.getProducts();
  res.send(response);
});

router.post("/", async (req, res) => {
  const { name, price, category, description } = req.body;

  const response = await productService.createProduct(
    name,
    price,
    category,
    description
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

export default router;
