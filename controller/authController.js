import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await userModel.findOne({email})

        if(!user){
            return res.status(404).json({
                success:false,
                message:'Invalid Credientials'
            })
        }

        // compare password
        const comparePassword=await bcrypt.compare(password,user.password)

        if(!comparePassword){
            return  res.status(404).json({
                success:false,
                message:'Invalid Credientials'
            })
        }

        // create token
        const token= jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})

        return res.status(201).json({
            success:true,
            message:'Login Successful',
            user,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Login Failed',
        })
    }
}


export const getCurrentUserController=async(req,res)=>{
    try {
        const user=await userModel.findOne({_id:req.body.userId})
        return res.status(200).json({
            success:true,
            user,
            message:'User get Successfully'
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Unable to get current user',
            error
        })
    }

}