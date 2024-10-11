import express from "express";
import { addTocart , updateCart , getUserCart } from "../controllers/cartControllers.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router()

cartRouter.post('/get', authUser , getUserCart)
cartRouter.post('/add', authUser , addTocart)
cartRouter.post('/update', authUser , updateCart)

export default cartRouter