import express from "express";
import { uuid } from "uuidv4";

import { productService } from "../services/ProductService.js";

const router = express.Router();

router.get("/", (req, res) => {
  const product = new productService();
  res.send(product.getProducts());
});

router.post("/", (req, res) => {
  const myBody = req.body;
  const product = new productService();
  res.send(product.createProduct(myBody));
});
//
router.get("/:id", (req, res) => {
  const id = req.params;
  const singleProduct = new productService();
  res.send(singleProduct.getProductById(id));
});

router.delete("/:id", (req, res) => {
  const id = req.params;
  const product = new productService();
  res.send(product.deleteProduct(id));
});

router.patch("/:id", (req, res) => {
  const id = req.params;
  const body = req.body;
  const product = new productService();
  res.send(product.updateProduct(id, body));
});

export default router;
