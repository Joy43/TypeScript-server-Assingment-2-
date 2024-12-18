import { Request, Response } from "express";

import { carService } from "./carstore.service";



/* 

Create a Car
Endpoint: /api/cars
Method: POST
Request Body:
*/
const CreateCarstore = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result=await carService.createCar(payload)
    res.json({
      message: "car-store created successfully",
      status:true,
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
/* 
Query: A list of all cars from the same category,
 you’ll take this as /api/cars?searchTerm=category 
 */
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
/* -------------
Get a Specific Car
Endpoint: /api/cars/:carId
Method: GET
Response: The details of a specific car by ID
--------------
*/
const SpecificCar = async (req: Request, res: Response) => {
  try {
    console.log(req.params)
    const carId = req.params.carId

    const result = await carService.SpecificCar(carId)
if(!result){
  res.status(404).json({
    status:false,
    message: `Car with ID ${carId} not found`,
  })
}
    res.status(200).send({
      status: true,
      message: 'Car retrieved successfully',
      result,
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

/* 
Update a Car
Endpoint: /api/cars/:carId
Method: PUT
Request Body: (Car details to update)
*/
const updateCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId
    const body = req.body
    const result = await carService.updateCar(carId, body)

    res.send({
      status: true,
      message: 'car updated successfully',
      result,
    })
    if(!result){
      res.status(404).json({
        status:false,
        messsage:`Car with ID ${carId} not found`
      }) 
      res.status(200).send({
        status: true,
        message: 'Car retrieved successfully',
        result,
      })
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
};

/* 
Endpoint: /api/cars/:carId
Method: DELETE
Response: Success message confirming the car has been deleted
*/
const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    await carService.deleteCar(carId);

   

    res.status(200).json({
      status: true,
      message: 'Car deleted successfully',
     
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};


// Properly export the controller
export const useController = {
  CreateCarstore,
  getAllCars,
  SpecificCar,
  updateCar ,
  deleteCar
};
