import express from 'express'
import { userAuth } from '../middlewares/authMiddleware.js'
import { createInventryController, getInventryController } from '../controller/inventryController.js'

const router=express.Router()


// add inventry
router.post('/create-inventry',userAuth,createInventryController)

// get all records
router.get('/get-inventry',userAuth,getInventryController)


export default router

