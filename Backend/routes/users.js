import "dotenv/config";

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
  console.log("AUTHHEADER:", authHeader);
  console.log("TOKEN", token);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.get("/", authenticateToken, (req, res) => {
  console.log("USERFROM:", req.user);
  userService
    .getUsers()
    .then((r) =>
      res.send(r.data.filter((user) => user.name === req.user.name))
    );
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
  const isValid = await userService.checkUser(name, password);
  console.log("ISVALID", isValid);
  // const user = {
  //   _id: isValid._id,
  //   name: isValid.name,
  //   email: isValid.email,
  //   password: isValid.password,
  // };
  const accessToken = jwt.sign(
    isValid.toJSON(),
    process.env.ACCESS_TOKEN_SECRET
  );

  res.json({ accessToken: accessToken });
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
