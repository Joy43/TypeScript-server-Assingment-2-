
import { Torder } from "./order.interface";
import Order from "./order.model";



const createOrder = async (payload: Torder) => {
    //   const result = await Tour.create(payload)
  
    const data = new Order(payload)
  
    //   data.color = "red"
  
    const result = await data.save()
    return result
  }
const getOrder = async () => {
  try {
    const result = await Order.find(); 
    return result;
  } catch (error) {
    console.error("Error in getOrder service:", error);
    throw error;
  }
};

export const Orderservice = {
  createOrder,
  getOrder,
};
