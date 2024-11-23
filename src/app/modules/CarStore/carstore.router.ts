import { Router } from "express";
import { useController } from "./carstore.controller";

const useRouter = Router();

// ---------- Create car ---------- 
useRouter.post('/', useController.CreateCarstore);
// -------get all car -----------
useRouter.get('/',useController.getAllCars);
// ---specific id car http://localhost:5000/api/6741789c36f61ad3e77348a7  ----------
useRouter.get('/:carId',useController.SpecificCar);
// --------update-----------
useRouter.put('/:carId',useController.updateCar);
export default useRouter;
