import { Tcar } from "./carstore.interface";
import Car from "./carstore.model";

// logical woring this file
const createCar=async(payload:Tcar):Promise<Tcar>=>{
    const result = await Car.create(payload);
    return result;
}

const getAllCars = async (searchTerm: string): Promise<Tcar[]> => {
    let query = {};
    if (searchTerm) {
      query = { 
        $or: [
          { brand: { $regex: searchTerm, $options: "i" } },  
          { model: { $regex: searchTerm, $options: "i" } },
          { category: { $regex: searchTerm, $options: "i" } }
        ] 
      };
    }
  
    const cars = await Car.find(query);  
    return cars;
  };

export const carService={
    createCar,
    getAllCars
}