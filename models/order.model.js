import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  itemList: {
    type: [String],
  },
  totolAmount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Order = new mongoose.model("Order", OrderSchema);

export default Order;
