import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import usersRoutes from "./routes/users.js";
import productsRoutes from "./routes/products.js";
import categoriesRoutes from "./routes/categories.js";
import ordersRoutes from "./routes/orders.js";
import uploadRoutes from "./routes/upload.js";

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

  const Mongo = process.env.MONGODB_PASS
  console.log("MONGOOOO",Mongo)
  await mongoose
    .connect(`mongodb+srv://marcin:${process.env.MONGODB_PASS}@clusterrestaurant.fsark.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    )

    .catch((error) => console.log(error.message));

  return app;
};
