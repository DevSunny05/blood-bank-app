import React from 'react'
import Form from '../../components/shared/forms/Form'

const Register = () => {
  return (
    <>
        <div className="row g-0">
            <div className="col-md-8 form-banner">
                <img src="./assets/banner2.jpg" alt="banner2" />
            </div>
            <div className="col-md-4 form-container">
                <Form title={'Register Page'} submitbtn={'Submit'} formType={'register'}/>
            </div>
        </div>
    </>
  )
}

export default Register