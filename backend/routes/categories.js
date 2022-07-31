import express from "express";
import { CategoryService } from "../services/CategoryService.js";
import { Repository } from "../repository/repository.js";
import Category from "../models/categoryModel.js";
import { ProductService } from "../services/ProductService.js";
import Product from "../models/productModel.js";

const router = express.Router();
const productService = new ProductService(new Repository(Product));
export const categoryService = new CategoryService(
  new Repository(Category),
  productService
);

router.get("/", async (req, res) => {
  const response = await categoryService.getCategories();
  res.send(response);
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  const response = await categoryService.createCategory(name);
  res.send(response);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await categoryService.getCategoryById(id);
  res.send(response);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await categoryService.deleteCategory(id);
  res.send(response);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await categoryService.updateCategory(id, body);
  res.send(response);
});

export default router;
