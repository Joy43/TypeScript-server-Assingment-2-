import { Router } from "express";
import { useController } from "./carstore.controller";

const useRouter = Router();

// ---------- Create car ---------- 
useRouter.post('/', useController.CreateCarstore);
// -------get all car http://localhost:5000/api/cars?searchTerm=Sedan -----------
useRouter.get('/',useController.getAllCars);
// ---specific car get=> http://localhost:5000/api/cars/648a45e5f0123c45678d9036  ----------
useRouter.get('/:carId',useController.SpecificCar);
// --------update  put=>  http://localhost:5000/api/cars/6741789c36f61ad3e77348a7  
useRouter.put('/:carId',useController.updateCar);
// Detete
useRouter.delete('/:carId',useController.deleteCar);
export default useRouter;
