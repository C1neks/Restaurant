import express from "express";
import { UserService } from "../services/UserService.js";

const router = express.Router();

const user = new UserService();

router.get("/", (req, res) => {
  user.getUsers().then((r) => res.send(r));
});

router.post("/", (req, res) => {
  const myBody = req.body;

  user.createUser(myBody.name, myBody.password).then((r) => {
    res.send(r);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  user.getUserById(id).then((r) => res.send(r));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  user.deleteUser(id).then((r) => {
    res.send(r);
  });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  user.updateUser(id, body).then((r) => {
    res.send(r);
  });
});

export default router;
