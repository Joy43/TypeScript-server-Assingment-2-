import express, { Request, Response } from 'express';
import cors from 'cors'
import carstoreRouter from './app/modules/CarStore/carstore.router';
const app = express();
app.use(express.json())
app.use(cors())
app.use("api/car",carstoreRouter)
app.get('/', (req: Request, res: Response) => {
  res.send({
    status:true,
    message:'assingment-2 sever is start 🏃🏽‍♂️‍➡️'
  });
});

export default app;