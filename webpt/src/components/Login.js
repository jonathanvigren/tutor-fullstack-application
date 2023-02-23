import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from 'react';
import './Signup.css';
import { AuthContext } from '../context/authContext';
import axios from "axios";


const Signin = () => {    
    const { signin } = useContext(AuthContext);
    const [enteredCredentials, setEnteredCredentials] = useState({
        email:"",
        password:"",
    });


    const navigate = useNavigate()

    
    const inputChangeHandler = e => {
        setEnteredCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await signin(enteredCredentials);
            await navigate("/application")
            } catch (err) {

            }
    };

    return (
        
        <div className="signup-popup">
            <div>
                <form  className="signup-form" action="#" onSubmit={submitHandler}>     

                <span className="form-span">
                    <label for="email" className="formLabel">Email</label>
                    <input type="text" placeholder="Email" id="email" name="email" className="textinputfield" onChange={inputChangeHandler}/>
                </span>

                <span className="form-span">
                    <label for="password" className="formLabel">Password</label>
                    <input type="password" placeholder="Password" id="password" name="password" className="textinputfield" onChange={inputChangeHandler}/>
                </span>
                <span className="form-span">

                    <button className="login-button">Sign in</button>

                </span>
                <span className="form-switch">


                <Link to="/signup" className="switch-text"><p>Don't have an account? Sign up</p></Link>

                </span>
                </form>
            </div>
        </div>
    )
}

export default Signin
