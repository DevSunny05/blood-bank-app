import React from 'react'
import InputType from '../../components/shared/forms/InputType'

const Login = () => {
  return (
    <>
        <div className="row">
            <div className="col-md-8 form-banner">
                <img src="./assets/banner1.jpg" alt="banner1" />
            </div>
            <div className="col-md-4 form-container">
                <form>
                   <InputType label={'Email'} labelFor={'forEmail'} name={'email'} type={'email'} />
                   <InputType label={'Password'} labelFor={'forPassword'} name={'password'} type={'password'} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

             </div>
        </div>
    </>
  )
}

export default Login