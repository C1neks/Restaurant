import express from "express";
import { UserService } from "../services/UserService.js";
import { Repository } from "../repository/repository.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const router = express.Router();

export const userService = new UserService(new Repository(User));

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get("/", async (req, res) => {
  const users = await userService.getUsers();
  res.send(users);
});

router.post("/", async (req, res) => {
  const { name, email, isAdmin, password } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hashedPassword);

    const userToCreate = await userService.createUser(
      name,
      email,
      isAdmin,
      hashedPassword
    );
    res.send(userToCreate);
  } catch {
    res.status(501).send();
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  console.log("LOG", req.body);
  const validUser = await userService.checkUser(name, password);
  console.log("ISVALID", validUser.user);
  if (validUser.error) {
    res.status(403).send(validUser.error);

    return;
  }
  const accessToken = jwt.sign(
    validUser.user.toJSON(),
    process.env.ACCESS_TOKEN_SECRET
  );
  res.json({ isValid: validUser, accessToken: accessToken });
});

router.get("/:id", authenticateToken, async (req, res) => {
  const id = req.params.id;

  const response = await userService.getUserById(id);
  res.send(response);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const response = await userService.deleteUser(id);
  res.send(response);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await userService.updateUser(id, body);
  res.send(response);
});

export default router;
