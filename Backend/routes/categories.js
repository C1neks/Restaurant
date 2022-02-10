import express from "express";
import { CategoryService } from "../services/CategoryService.js";
import { Repository } from "../repository/repository.js";
import Category from "../models/categoryModel.js";

const router = express.Router();

export const categoryService = new CategoryService(new Repository(Category));

router.get("/", (req, res) => {
  categoryService.getCategories().then((r) => res.send(r));
});

router.post("/", (req, res) => {
  const { name } = req.body;

  categoryService.createCategory(name).then((r) => {
    res.send(r);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  categoryService.getCategoryById(id).then((r) => res.send(r));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  categoryService.deleteCategory(id).then((r) => {
    res.send(r);
  });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  categoryService.updateCategory(id, body).then((r) => {
    res.send(r);
  });
});

export default router;
