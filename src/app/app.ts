require("dotenv").config();
import  express  from "express";
import {Request,Response ,NextFunction} from "express"
import cors from 'cors';
import {Routes} from "../routes";

import { Router } from 'express';
import path from 'path';


const app = express()
const route = Router();
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.header("Access-Control-Allow-Headers", '*');
    res.header("Access-Control-Allow-Origin", '*');
    res.header("'Content-Type'", "'multipart/form-data'");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors())
    next()
})


app.use(express.json());
app.use(route)
Routes(app)

app.use('/files',express.static(path.resolve(__dirname,'..','..','tmp','uploads')))
export default app;
