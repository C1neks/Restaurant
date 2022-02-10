import express from "express";
import { OrderService } from "../services/OrderService.js";
import { Repository } from "../repository/repository.js";
import Order from "../models/orderModel.js";

const router = express.Router();

export const orderService = new OrderService(new Repository(Order));

router.get("/", (req, res) => {
  const isDescOrAsc = "asc" in req.query ? "asc" : "desc";

  orderService.getOrders(isDescOrAsc).then((r) => res.send(r));
});

router.post("/", (req, res) => {
  const { items, user } = req.body;

  orderService.createOrder(items, user).then((r) => {
    res.send(r);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  orderService.getOrderById(id).then((r) => res.send(r));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  orderService.deleteOrder(id).then((r) => {
    res.send(r);
  });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  orderService.updateOrder(id, body).then((r) => {
    res.send(r);
  });
});

export default router;