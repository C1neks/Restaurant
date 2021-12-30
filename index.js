import express from "express";
import bodyParser from "body-parser";

import productsRoutes from "./routes/products.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use("/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);
