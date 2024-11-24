"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.get("/revenue", order_controller_1.Ordercontroller.getRevenue);
orderRouter.post("/", order_controller_1.Ordercontroller.createOrder);
orderRouter.get("/", order_controller_1.Ordercontroller.getOrder);
exports.default = orderRouter;
