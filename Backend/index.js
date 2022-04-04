import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import categoriesRoutes from "./routes/categories.js";
import ordersRoutes from "./routes/orders.js";
import mongoose from "mongoose";

import cors from "cors";

const app = express();
app.use(cors());
const PORT = 4000;
app.use(bodyParser.json());

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});

mongoose
  .connect(
    "mongodb+srv://marcin:marcin12@clusterrestaurant.fsark.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
