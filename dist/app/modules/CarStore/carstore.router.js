"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carstore_controller_1 = require("./carstore.controller");
const useRouter = (0, express_1.Router)();
// Create car 
useRouter.post('/cars', carstore_controller_1.useController.CreateCarstore);
// get all car
useRouter.get('/cars', carstore_controller_1.useController.getAllCars);
exports.default = useRouter;
