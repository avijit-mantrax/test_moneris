import { Router } from "express";
import Purchase from "../functions/purchase";

const  endpoint = Router();

endpoint.post("/payment",Purchase);


export default endpoint;