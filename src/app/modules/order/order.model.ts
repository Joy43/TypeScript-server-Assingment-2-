import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide a valid email address'],
      match: [/.+@.+\..+/, 'Please provide a valid email format'], 
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car', 
      required: [true, 'Car ID is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'], 
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price cannot be negative'], 
    },
  },
  {
    timestamps: true, 
  }
);

const Order=model("Order", orderSchema);
export default Order;
