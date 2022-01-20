import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  user: { type: String, ref: "User", required: true },
  quantity: { type: Number, default: 1 },
  status: { type: Number, default: 0 },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
