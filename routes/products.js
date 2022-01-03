import express from "express";
import { uuid } from "uuidv4";

import { ProductService, ProductModel } from "../services/ProductService.js";

const router = express.Router();
const product = new ProductService();
router.get("/", (req, res) => {
  console.log(product.getProducts());
  res.send(product.getProducts());
});

router.post("/", (req, res) => {
  const myBody = req.body;

  // console.log(myBody.name, myBody.price, myBody.description);

  res.send(
    product.createProduct(myBody.name, myBody.price, myBody.description)
  );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.send(product.getProductById(id));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const product = new ProductService();
  res.send(product.deleteProduct(id));
});
//
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  res.send(product.updateProduct(id, body));
});

export default router;
