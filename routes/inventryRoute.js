import express from 'express'
import { userAuth } from '../middlewares/authMiddleware.js'
import { createInventryController } from '../controller/inventryController.js'

const router=express.Router()


// add inventry
router.post('/create-inventry',userAuth,createInventryController)


export default router

