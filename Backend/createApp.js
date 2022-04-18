import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import categoriesRoutes from "./routes/categories.js";
import ordersRoutes from "./routes/orders.js";
import uploadRoutes from "./routes/upload.js";
import mongoose from "mongoose";

import cors from "cors";

export const createApp = async () => {
  const app = express();
  app.use(cors());

  app.use(bodyParser.json());

  app.use("/products", productsRoutes);
  app.use("/users", usersRoutes);
  app.use("/categories", categoriesRoutes);
  app.use("/orders", ordersRoutes);
  app.use("/upload", uploadRoutes);
  app.use("/static", express.static("public"));

  app.get("/", (req, res) => {
    res.send("HOMEPAGE");
  });

  await mongoose
    .connect(
      "mongodb+srv://marcin:marcin12@clusterrestaurant.fsark.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )

    .catch((error) => console.log(error.message));

  return app;
};
