import { Router } from "express";
import { carstoreController } from "./carstore.controller";


const carstoreRouter=Router()
carstoreRouter.post('/create-car',carstoreController.CreateCarstore)

export default carstoreRouter;