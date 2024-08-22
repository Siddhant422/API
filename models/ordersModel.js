import mongoose, { mongo, Mongoose } from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
    products: {
        type: [orderItemSchema],
        required: true
    }
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
