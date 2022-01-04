import express from "express";
import { uuid } from "uuidv4";

import { ProductService } from "../services/ProductService.js";

const router = express.Router();
const product = new ProductService();
router.get("/", (req, res) => {
  product.getProducts().then((r) => res.send(r));
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

  product.getProductById(id).then((r) => res.send(r));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  product.deleteProduct(id).then((r) => {
    res.send(r);
  });
});
//
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  product.updateProduct(id, body).then((r) => {
    res.send(r);
  });
});

export default router;
