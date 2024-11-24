
import { Torder } from "./order.interface";
import Order from "./order.model";

// --------------careate order---------

const createOrder = async (payload: Torder) => {
 
    const data = new Order(payload)

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
// --------------revenue--------------
const getRevenue = async () => {
    try {
      const result = await Order.aggregate([
        {
          $group: {
            _id: null, 
            totalRevenue: { $sum: "$totalPrice" }, 
          },
        },
      ]);
  
      return result[0]?.totalRevenue || 0; 
    } catch (error) {
      console.log("Error in calculateRevenue service:", error);
    
    }
  };
export const Orderservice = {
  createOrder,
  getOrder,
  getRevenue 
};
