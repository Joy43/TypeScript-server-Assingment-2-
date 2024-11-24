import { Request, Response } from "express";
import { Orderservice } from "./order.service";

const createOrder = async (req: Request, res: Response)=> {
  try {
    const body = req.body;

   const result=await Orderservice.createOrder(body);

   res.send({
    success: true,
    message: 'order created successfully',
    result,
  })
} catch (error) {
  res.send({
    success: false,
    error,
  })
}
};

// -------get order
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await Orderservice.getOrder()

    res.send({
      success: true,
      message: 'order get successfully',
      result,
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const getRevenue=async(req:Request,res:Response)=>{
  
}
export const Ordercontroller = {
  createOrder,
  getOrder
};
