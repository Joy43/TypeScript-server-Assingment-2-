import { Router } from "express";
import { useController } from "./carstore.controller";

const useRouter = Router();

// Create car 
useRouter.post('/cars', useController.CreateCarstore);
// get all car
useRouter.get('/cars',useController.getAllCars)

export default useRouter;
