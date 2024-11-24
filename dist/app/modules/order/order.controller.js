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
exports.Ordercontroller = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield order_service_1.Orderservice.createOrder(body);
        res.send({
            success: true,
            message: 'order created successfully',
            result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            error,
        });
    }
});
// -------    get order -----------------
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.Orderservice.getOrder();
        res.send({
            success: true,
            message: 'order get successfully',
            result,
        });
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// ----------- getRevenue--------------
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.Orderservice.getRevenue();
        res.send({
            success: true,
            message: 'Revenue calculated successfully',
            data: {
                totalRevenue: result,
            },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong while calculating revenue',
            error,
        });
    }
    ;
});
exports.Ordercontroller = {
    createOrder,
    getOrder,
    getRevenue
};
