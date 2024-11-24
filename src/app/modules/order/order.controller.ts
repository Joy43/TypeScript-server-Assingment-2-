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

// -------    get order -----------------
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
};

// ----------- getRevenue--------------
const getRevenue =async(req:Request,res:Response)=>{
try{
const result=await Orderservice.getRevenue();
res.send({
  success: true,
  message: 'Revenue calculated successfully',
  data: {
    totalRevenue: result,
  },
});
}
catch (error){
  res.status(500).send({
    success: false,
    message: 'Something went wrong while calculating revenue',
    error,
})
};
}
export const Ordercontroller = {
  createOrder,
  getOrder,
  getRevenue  
};
