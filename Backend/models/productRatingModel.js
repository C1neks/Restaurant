import mongoose from "mongoose";

const productRatingSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  rating: { type: Number, default: 0 },
  numberOfRatings: { type: Number, default: 0 },
  usersWhoRated: { type: Object, default: {} },
});

const ProductRating = mongoose.model("ProductRating", productRatingSchema);

export default ProductRating;
