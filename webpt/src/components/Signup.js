import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import './Signup.css';
import axios from "axios";

const Signup = () => {
    const [enteredCredentials, setEnteredCredentials] = useState({
        email:"",
        password:"",
        name:"",
        description:"",
    });

    const history = useNavigate()

    
    const inputChangeHandler = e => {
        setEnteredCredentials(prev =>({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:3305/backend/auth/signup", enteredCredentials)
        } catch(err){
            console.log("error")
        }
    };

    return (
        
        <div className="signup-popup">
            <div>
                <form  className="signup-form" action="#" onSubmit={submitHandler}>     

                <span className="form-span">
                    <label for="name" className="formLabel">Name</label>
                    <input type="text" placeholder="Name" id="name" name="name" className="textinputfield" onChange={inputChangeHandler}></input>
                </span>

                <span className="form-span">
                    <label for="email" className="formLabel">Email</label>
                    <input type="text" placeholder="Email" id="email" name="email" className="textinputfield" onChange={inputChangeHandler}></input>
                </span>

                <span className="form-span">
                    <label for="password" className="formLabel">Password</label>
                    <input type="password" placeholder="Password" id="password" name="password" className="textinputfield" onChange={inputChangeHandler}></input>
                </span>
                <span className="form-span">

                <span className="form-span">
                    <label for="description" className="formLabel">description</label>
                    <input type="text" placeholder="Description" id="description" name="description" className="textinputfield" onChange={inputChangeHandler}></input>
                </span>

                    <button className="login-button">Sign up</button>

                </span>
                <span className="form-switch">


                <Link to="/signin" className="switch-text"><p>Already have an account? Sign up</p></Link>

                </span>
                </form>
            </div>
        </div>
    )
}

export default Signup

