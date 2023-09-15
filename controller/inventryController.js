import inventryModel from "../models/inventryModel.js"
import userModel from "../models/userModel.js"

export const createInventryController=async(req,res)=>{
    try {
        const {email,inventryType}=req.body
        const user=await userModel.findOne({email})

        if(!user){
            return res.status(401).json({
                success:false,
                message:'User not found',
               
            })
        }

        // if(inventryType === 'in' && user.role !== 'donar'){
        //     return res.status(401).json({
        //         success:false,
        //         message:'Not a donar account',
               
        //     })
        // }

        if(inventryType === 'out' && user.role !== 'hospital'){
            return res.status(401).json({
                success:false,
                message:'Not a hospital',
               
            })
        }

        const inventry=new inventryModel(req.body)
        await inventry.save()

        return res.status(201).json({
            success:true,
            message:'New blood record added',
           
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Error in creating Inventry',
            error
        })
    }
}

export const getInventryController=async(req,res)=>{
    try {
        let inventry=await inventryModel.find({organisation:req.body.userId})
        .populate('donar').populate('hospital').sort({createdAt:-1})

        return res.status(201).send({
            success:true,
            message:'Get all records Successfully',
            inventry
           
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error while getting Inventry',
            error
        })

    }
}