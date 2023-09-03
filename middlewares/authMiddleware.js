import jwt from 'jsonwebtoken'


export const userAuth=async(req,res,next)=>{
    try {
        const authHeader=req.headers.authorization

        if(!authHeader || !authHeader.startsWith('Bearer')){
            next('Auth failed')
        }
    
        const token=authHeader.split(" ")[1]
        

        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                return res.status(401).json({
                    success:false,
                    err,
                    message:'Auth Failed'
                })
            }else{
                req.body.userId=decode.userId
                next()
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success:false,
            error,
            message:'Auth Failed'
        })
    }
}