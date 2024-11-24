import { Router } from "express";
import { useController } from "./carstore.controller";

const useRouter = Router();

// ---------- Create car ---------- 
useRouter.post('/', useController.CreateCarstore);
// -------get all car -----------
useRouter.get('/',useController.getAllCars);
// ---specific id car get=> http://localhost:5000/api/6741789c36f61ad3e77348a7  ----------
useRouter.get('/:carId',useController.SpecificCar);
// --------update  put=>  http://localhost:5000/api/cars/6741789c36f61ad3e77348a7-----------
useRouter.put('/:carId',useController.updateCar);
// Detete
useRouter.delete('/:carId',useController.deleteCar);
export default useRouter;
