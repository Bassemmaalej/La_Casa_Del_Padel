
import React from 'react';
import './Register.css'
import Radio from '@mui/material/Radio';
import loginImage from "../../../assets/icons/file.svg"


import { NavLink } from 'react-router-dom';


const Register = () => {


    return (
        <>
            <div className='register-container'>
                <div className='col-6 white-container' >
                    <h1 className='register-title_re'>
                        Register
                    </h1>
                    <div className='row' >

                        <form className='register-form'>
                            <div class="form-group">
                                <input type="name" class="form-control" placeholder="Enter your Name" />
                            </div>
                            <div class="form-group">
                                <input type="lastName" class="form-control" placeholder="Enter your Last Name" />
                            </div>

                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter your Email" />
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <Radio />
                                <label class="form-check-label" for="exampleCheck1">I agree to all <a href='/casa' >terms and conditions</a></label>
                            </div>
                            <button type="submit" class="btn  Login-btn">SIGN UP</button>
                        </form>

                    </div>
                </div>
                <div className='col-6  blue-container ' >
                    <div className='row'>

                        <h1 className='login-title_re'>
                            Login
                        </h1>
                    </div>
                    <p className='register-p'>Login and play with your freinds</p>
                    <div className='row'>

                        <img className='row register-Image' src={loginImage} alt='La casa de padel' />
                    </div>
                    <div className='row try_This_Way_Register-div' >

                        <NavLink to='/login' >
                            <p className="try-this-way" >Try this way</p>


                        </NavLink>

                    </div>

                </div>


            </div>
        </>


    );
}

export default Register;