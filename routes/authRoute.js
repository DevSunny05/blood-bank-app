import express from "express";
import { getCurrentUserController, loginController, registerController } from "../controller/authController.js";
import { userAuth } from "../middlewares/authMiddleware.js";

const router=express.Router()

// register
router.post('/register',registerController)

// login
router.post('/login',loginController)

// get current user
router.get('/current-user',userAuth,getCurrentUserController)



export default router