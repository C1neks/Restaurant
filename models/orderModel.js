import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    product: [{ type: String, ref: "Product" }],
    user: { type: String, ref: "User", required: true },
    quantity: { type: Number, default: 1 },
    price: { type: Number, default: 0 },
    status: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
