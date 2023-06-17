import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'

import authRoute from './routes/authRoute.js'
import inventryRoute from './routes/inventryRoute.js'

// config .env
dotenv.config()

// mongodb connection

connectDB()


// rest object
const app=express()

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/inventry',inventryRoute)

// port
const PORT=process.env.PORT || 8080

// listnen
app.listen(8080,()=>{
    console.log(`Node server running on PORT ${PORT} ` .bgCyan.white)
})
