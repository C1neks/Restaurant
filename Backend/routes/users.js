import express from "express";
import { UserService } from "../services/UserService.js";
import { Repository } from "../repository/repository.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

export const userService = new UserService(new Repository(User));

router.get("/", (req, res) => {
  userService.getUsers().then((r) => res.send(r));
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hashedPassword);
    userService.createUser(name, email, hashedPassword).then((r) => {
      res.send(r);
    });
  } catch {
    res.status(501).send();
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  userService.checkUser(name, password).then((r) => {
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
