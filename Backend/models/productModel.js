import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.String,
    ref: "Category",
    required: true,
  },
  description: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
