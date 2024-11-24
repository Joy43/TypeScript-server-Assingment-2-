import { Router } from "express";
import { Ordercontroller } from "./order.controller";

const orderRouter=Router();
orderRouter.get("/revenue", Ordercontroller.getRevenue);
orderRouter.post("/", Ordercontroller.createOrder);
orderRouter.get("/", Ordercontroller.getOrder);


export default orderRouter;