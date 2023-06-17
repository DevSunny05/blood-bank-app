import mongoose from "mongoose";

const inventrySchema=new mongoose.Schema({
    inventryType:{
        type:String,
        required:[true,'inventry type required'],
        enum:['in','out']
    },
    bloodGroup:{
        type:String,
        required:[true,'blood group is required'],
        enum:['O+','O-','AB+','AB-','A+','A-','B+','B-']
    },
    quantity:{
        type:Number,
        required:[true,'blood quantity is required']
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organization is required']

    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
            return this.inventryType === 'out'
        }
    },
    donar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
            return this.inventryType === 'in'
        }
    }

},{
    timestamps:true
})


export default mongoose.model('Inventry',inventrySchema)

