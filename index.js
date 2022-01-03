import express from "express";
import bodyParser from "body-parser";

import productsRoutes from "./routes/products.js";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use("/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});

const CONNECTION_URL =
  "mongodb+srv://marcin:marcin12@clusterrestaurant.fsark.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
