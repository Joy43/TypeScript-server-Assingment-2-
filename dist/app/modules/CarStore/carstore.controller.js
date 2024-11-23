"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useController = void 0;
const carstore_service_1 = require("./carstore.service");
/*

Create a Car
Endpoint: /api/cars
Method: POST
Request Body:
*/
const CreateCarstore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield carstore_service_1.carService.createCar(payload);
        res.json({
            message: "car-store created successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
});
/*
Query: A list of all cars from the same category,
 you’ll take this as /api/cars?searchTerm=category
 */
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const searchTerm = ((_a = req.query.searchTerm) === null || _a === void 0 ? void 0 : _a.toString()) || '';
        const result = yield carstore_service_1.carService.getAllCars(searchTerm);
        res.json({
            message: "Cars retrieved successfully",
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
});
/* -------------
Get a Specific Car
Endpoint: /api/cars/:carId
Method: GET
Response: The details of a specific car by ID
--------------
*/
const SpecificCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const carId = req.params.carId;
        const result = yield carstore_service_1.carService.SpecificCar(carId);
        res.send({
            status: true,
            message: 'car getting successfully',
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
//  update content
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const body = req.body;
        const result = yield carstore_service_1.carService.updateCar(carId, body);
        res.send({
            status: true,
            message: 'car updated successfully',
            result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// Properly export the controller
exports.useController = {
    CreateCarstore,
    getAllCars,
    SpecificCar,
    updateCar
};
