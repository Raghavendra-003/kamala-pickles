import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
{
  orderId: {
    type: String,
    required: true,
  },

  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      weight: String,
      image: String,
    },
  ],

  totalAmount: {
    type: Number,
    required: true,
  },
},
{ timestamps: true }
);

export default mongoose.model("Order", OrderSchema);