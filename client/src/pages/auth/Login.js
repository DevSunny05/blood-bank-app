import React from 'react'
import Form from '../../components/shared/forms/Form'

const Login = () => {
  return (
    <>
        <div className="row g-0">
            <div className="col-md-8 form-banner">
                <img src="./assets/banner1.jpg" alt="banner1" />
            </div>
            <div className="col-md-4 form-container">
                <Form title={'Login Page'} submitbtn={'Login'} formType={'login'}/>
             </div>
        </div>
    </>
  )
}

export default Login