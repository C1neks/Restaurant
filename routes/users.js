import express from "express";
import { UserService } from "../services/UserService.js";
import {Repository} from "../repository/repository.js";
import User from "../models/userModel.js";

const router = express.Router();


export const userService = new UserService(new Repository(User));

router.get("/", (req, res) => {
  userService.getUsers().then((r) => res.send(r));
});

router.post("/", (req, res) => {
  const myBody = req.body;

  userService.createUser(myBody.name, myBody.password).then((r) => {
    res.send(r);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  userService.getUserById(id).then((r) => res.send(r));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  userService.deleteUser(id).then((r) => {
    res.send(r);
  });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  userService.updateUser(id, body).then((r) => {
    res.send(r);
  });
});

export default router;
