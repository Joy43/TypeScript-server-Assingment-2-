import { Request, Response } from "express";

import { carService } from "./carstore.service";

const CreateCarstore = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result=await carService.createCar(payload)
    res.json({
      message: "car-store created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm?.toString() || '';  
    const result = await carService.getAllCars(searchTerm);
    res.json({
      message: "Cars retrieved successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};

// Properly export the controller
export const useController = {
  CreateCarstore,
  getAllCars,
};
