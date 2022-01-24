import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
//   {
//     products: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Product",
//         quantity: Number,
//       },
//     ],
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     quantity: { type: Number, default: 1 },
//     price: { type: Number, default: 0 },
//     status: { type: Number, default: 0 },
//   },
//   { timestamps: { createdAt: "created_at" } }
// );
let ItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity can not be less then 1."],
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const CartSchema = new mongoose.Schema(
  {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity can not be less then 1."],
        },
        price: {
          type: Number,
          required: true,
        },
        total: {
          type: Number,
          required: true,
        },
      },
    ],
    subTotal: {
      default: 0,
      type: Number,
    },
    status: {
      type: String,
      enum: ["inprocessing", "done"],
      default: "inprocessing",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", CartSchema);

export default Order;
