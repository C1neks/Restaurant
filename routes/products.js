import express from "express";
import { uuid } from "uuidv4";

const router = express.Router();

let products = [];

router.get("/", (req, res) => {
  res.send(products);
});

router.post("/", (req, res) => {
  const product = req.body;

  products.push({ ...product, id: uuid() });
  res.send(`Product ${product.name} added to the DB`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundProduct = products.find((product) => product.id === id);
  res.send(foundProduct);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  products = products.filter((product) => product.id !== id);

  res.send(`Product with id ${id} deleted from DB!`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const updatedProduct = products.find((product) => product.id === id);

  if (name) updatedProduct.name = name;

  if (price) updatedProduct.price = price;

  if (description) updatedProduct.description = description;

  res.send(`Product with id ${id} updated!`);
});

export default router;
