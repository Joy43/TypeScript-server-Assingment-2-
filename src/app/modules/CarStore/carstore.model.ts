import { Schema, model } from "mongoose";

const carStoreSchema = new Schema({
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

// Export  model
const Car = model("Car", carStoreSchema);
export default Car;
