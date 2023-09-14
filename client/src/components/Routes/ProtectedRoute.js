import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { setUser } from '../../redux/features/auth/authSlice'

const ProtectedRoute = ({children}) => {
    const dispatch=useDispatch()

    // get current user
    const getUser=async()=>{
        try {
            const {data}=await axios.get('/api/v1/auth/current-user',
            {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
            )
            console.log(data)
            if(data?.success){
                dispatch(setUser(data.user))
            }
        } catch (error) {
            // localStorage.clear()
            console.log(error)
        }
    }

    useEffect(()=>{
        getUser()
    })

    if(localStorage.getItem('token')){
        return children
    }else{
        <Navigate to='/login'/>
    }
 
}

export default ProtectedRoute