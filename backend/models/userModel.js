import mongoose from "mongoose";
import validator from "validator";
const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  isAdmin: { type: Boolean, default: false },
  password: { type: String, required: true },
  orders: [],
});

const User = mongoose.model("User", userSchema);

export default User;
