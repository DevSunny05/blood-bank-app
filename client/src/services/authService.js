export const handleLogin=(e,email,password,role)=>{
    e.preventDefault()
    try {
        if(!role || !email ||  !password){
            return alert('Please provide all fields')
        }
    } catch (error) {
        
    }
}

export const handleRegister=(e,name ,role,email,password,organisationName,hospitalName,website,address,phone)=>{
    e.preventDefault()
    try {
        
    } catch (error) {
        
    }
}