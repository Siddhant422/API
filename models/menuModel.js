import mongoose, { mongo, Mongoose } from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
  }
);
const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
