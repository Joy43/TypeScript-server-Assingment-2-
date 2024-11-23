import { Schema, model } from "mongoose";
import { Tcar } from "./carstore.interface";

const carStoreSchema = new Schema<Tcar>(
  {
    brand: {
      type: String,
      required: [true, " Please provide the brand name."],
      minlength:2,
      maxlength:30
    },
    model: {
      type: String,
      required: [true, "Model name is required. Please provide the model name."],
    },
    year: {
      type: Number,
      required: [true, " Please provide the year."],
      min: [1886, "The year must be 1886 or later."],
    },
    price: {
      type: Number,
      required: [true, " Please provide the product price."],
      min: [0, "Price cannot be negative number."],
    },
    category: {
      type: String,
      enum: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
      required: [true, " Please specify a valid category."],
    },
    description: {
      type: String,
      required: [true, " Please provide a description (maximum 500 characters)."],
      maxlength: [500, "Description cannot exceed 500 characters."],
    },
    quantity: {
      type: Number,
      required: [true, " Please specify the available quantity."],
      min: [0, "Quantity cannot be negative."],
    },
    inStock: {
      type: Boolean,
      required: [true, "Please specify if the product is in stock."],
    },
  },
  {
    timestamps: true,
  }
);

// Export the model for access another component
const Car = model<Tcar>("Car", carStoreSchema);
export default Car;
