import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    role:{
        type:String,
        required:[true,'role is require'],
        enum:['admin','organisation','user','hospital']
    },
    name:{
        type:String,
        required:function(){
            if(this.role === 'user' || this.role === 'admin'){
                return true
            }
            return false
        }
       
    },
    organisationName:{
        type:String,
        required:function(){
            if(this.role === 'organisation'){
                return true
            }
            return false
        }
    },

    hospitalName:{
        type:String,
        required:function(){
            if(this.role === 'hospital'){
                return true
            }
            return false
        }
    },
    email:{
        type:String,
        required:[true,'email is require'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is require'],
        unique:true
    },
    website:{
        type:String,
       
       
    },
    address:{
        type:String,
        required:[true,'address is require'],
        
    },
    phone:{
        type:String,
        required:[true,'phone number is require'],
       
    },
},{timestamps:true})

export default mongoose.model('Users',userSchema)

