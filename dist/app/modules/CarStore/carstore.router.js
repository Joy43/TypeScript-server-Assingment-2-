"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carstore_controller_1 = require("./carstore.controller");
const useRouter = (0, express_1.Router)();
// ---------- Create car ---------- 
useRouter.post('/', carstore_controller_1.useController.CreateCarstore);
// -------get all car http://localhost:5000/api/cars?searchTerm=Sedan -----------
useRouter.get('/', carstore_controller_1.useController.getAllCars);
// ---specific car get=> http://localhost:5000/api/6741789c36f61ad3e77348a7  ----------
useRouter.get('/:carId', carstore_controller_1.useController.SpecificCar);
// --------update  put=>  http://localhost:5000/api/cars/6741789c36f61ad3e77348a7  
useRouter.put('/:carId', carstore_controller_1.useController.updateCar);
// Detete
useRouter.delete('/:carId', carstore_controller_1.useController.deleteCar);
exports.default = useRouter;
