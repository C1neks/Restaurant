import express from "express";
import { OrderService } from "../services/OrderService.js";
import { Repository } from "../repository/repository.js";
import Order from "../models/orderModel.js";

const router = express.Router();

export const orderService = new OrderService(new Repository(Order));

router.get("/", async (req, res) => {
  const isDescOrAsc = "asc" in req.query ? "asc" : "desc";

  const response = await orderService.getOrders(isDescOrAsc);
  res.send(response);
});

router.post("/", async (req, res) => {
  const { items, user } = req.body;

  const response = await orderService.createOrder(items, user);
  res.send(response);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await orderService.getOrderById(id);
  res.send(response);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await orderService.deleteOrder(id);
  res.send(response);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await orderService.updateOrder(id, body);
  res.send(response);
});

export default router;
