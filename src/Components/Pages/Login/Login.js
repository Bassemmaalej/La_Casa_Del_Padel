
import React from 'react';
import Radio from '@mui/material/Radio';
import loginImage from "../../../assets/icons/file.svg"
import './Login.css'

import { NavLink } from 'react-router-dom';


const Login = () => {


    return (
        <>
            <div className='login-container'>
                <div className='col-6 blue-container-login' >
                    <div className='row'>

                        <h1 className='register-title'>
                            Register
                        </h1>
                    </div>

                    <div className='row'>

                        <img className='row login-Image' src={loginImage} alt='La casa de padel' />
                    </div>
                    <div className='row welcome-div' >
                        <p>
                            Welcome To
                            <br />
                            La casa De Padel!
                        </p>
                        <NavLink to='/register' >
                            <p className="try-this-way" >Try this way</p>


                        </NavLink>

                    </div>

                </div>
                <div className='col-6 white-container-login' >

                    <h1 className='login-title'>Login</h1>
                    <p className='login-p'>Login and play with your freinds</p>
                    <form className='login-form'>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <div class="form-check">
                            <Radio />
                            <label class="form-check-label" for="exampleCheck1">I agree to all <a href='/casa' >terms and conditions</a></label>
                        </div>
                        <button type="submit" class="btn  Login-btn">Login</button>
                        <a href='/casa' className='forget-pswd' >Forgot your password?</a>
                    </form>

                </div>


            </div>
        </>


    );
}

export default Login;