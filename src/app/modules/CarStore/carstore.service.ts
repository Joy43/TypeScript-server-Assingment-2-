import { Tcar } from "./carstore.interface";
import Car from "./carstore.model";

// logical woring this file
const createCar=async(payload:Tcar):Promise<Tcar>=>{
    const result = await Car.create(payload);
    return result;
}
//  search find car
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

  //  specific user
  const SpecificCar = async (carId: string) => {
    const result = await Car.findById(carId)
    return result;
  };
  // ===== update======

  const updateCar = async (id: string, data: Tcar) => {
    const result = await Car.findByIdAndUpdate(id, data, {
      new: true,
    })
    return result
  };
  const deleteCar = async (id: string) => {
    const result = await Car.findByIdAndDelete(id)
    return result
  }

export const carService={
    createCar,
    getAllCars,
    SpecificCar,
    updateCar,
    deleteCar

}