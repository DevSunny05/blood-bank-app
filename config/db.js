import mongoose from "mongoose";
import colors from 'colors'

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB database connected ${mongoose.connection.host}` .bgMagenta.white)
    } catch (error) {
        console.log(`MongoDB connection error ${error}` .bgRed.white)
    }
}

export default connectDB
