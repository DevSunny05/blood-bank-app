import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'

export const registerController=async(req,res)=>{
    try {
        const {email,password}=req.body
        const existingUser=await userModel.findOne({email:email})
        if(existingUser){
            return res.status(200).json({
                success:false,
                message:'User already exist',

            })
        }
        // hash pasword
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(password,salt)
        req.body.password=hashPassword

        const user=new userModel(req.body)
        await user.save()

        return res.status(201).json({
            success:true,
            message:'User created successfuly',
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Error in register api',
            error
        })
    }

}