import express from "express";


import { ProductService } from "../services/ProductService.js";

import {Repository} from "../repository/repository.js";

import Product from "../models/productModel.js";


const router = express.Router();
export const productService = new ProductService(new Repository(Product));
router.get("/", (req, res) => {
  productService.getProducts().then((r) => res.send(r));
});

router.post("/", (req, res) => {
  const myBody = req.body;

  // userService.createUser(myBody.name, myBody.password).then((r) => {
  //   res.send(r);
  // });
productService.createProduct(myBody.name, myBody.price, myBody.description).then((r)=>{
  res.send(r);
})
  // res.send(
  //   productService.createProduct(myBody.name, myBody.price, myBody.description)
  // );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  productService.getProductById(id).then((r) => res.send(r));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  productService.deleteProduct(id).then((r) => {
    res.send(r);
  });
});
//
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  productService.updateProduct(id, body).then((r) => {
    res.send(r);
  });
});

export default router;
