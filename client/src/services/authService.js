import { toast } from "react-toastify"
import store from "../redux/store"
import { userLogin, userRegister } from "../redux/features/auth/authAction"


export const handleLogin=(e,email,password,role)=>{
    e.preventDefault()
    try {
        if(!role || !email ||  !password){
            toast.error('Please provide all fields')
        }
        store.dispatch(userLogin({email,password,role}))
    } catch (error) {
        toast.error(error)
    }
}

export const handleRegister=(e,name ,role,email,password,organisationName,hospitalName,website,address,phone)=>{
    e.preventDefault()
    try {
        store.dispatch(userRegister({name ,role,email,password,organisationName,hospitalName,website,address,phone}))
    } catch (error) {
        
    }
}