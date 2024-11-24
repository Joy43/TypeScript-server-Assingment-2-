import express, { Request, Response } from 'express';
import cors from 'cors';
import useRouter from './app/modules/CarStore/carstore.router';
import orderRouter from './app/modules/order/order.router';


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mount the routes
app.use('/api/cars', useRouter);
app.use('/api/order', orderRouter);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is running successfully 🏃🏽‍♂️➡️',
  });
});

export default app;
