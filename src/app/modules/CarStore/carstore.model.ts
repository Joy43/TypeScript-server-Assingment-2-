import { Schema, model } from "mongoose";
import { Tcar } from "./carstore.interface";

const carStoreSchema = new Schema<Tcar>({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1886, 
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ["Sedan", "SUV", "Truck", "Coupe", "Convertible"],
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true, 
});

// Export  model now
const Car = model <Tcar>("Car", carStoreSchema);
export default Car;
