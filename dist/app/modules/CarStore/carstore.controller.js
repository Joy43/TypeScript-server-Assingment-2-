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
const CreateCarstore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield carstore_service_1.carService.createCar(payload);
        res.json({
            message: "car-store created successfully",
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
// Properly export the controller
exports.useController = {
    CreateCarstore,
    getAllCars,
};
