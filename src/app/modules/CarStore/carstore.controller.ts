import { Request, Response } from "express"
import Car from "./carstore.model";

const CreateCarstore=async(req:Request,res:Response)=>{
    const payload=req.body;
    const result=await Car.create(payload)
    res.json({
        message:'carstor created sucessfully',
        data:result,
    })
}
export const carstoreController={
    CreateCarstore,
}
