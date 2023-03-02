import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import './Signup.css';
import axios from "axios";

const Signup = () => {
    const [enteredCredentials, setEnteredCredentials] = useState({
        email: "",
        password: "",
        name: "",
        account_type: "",
    });

    const history = useNavigate()


    const inputChangeHandler = e => {
        setEnteredCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitHandler = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3305/backend/auth/signup", enteredCredentials)
        } catch (err) {
            console.log(err)
            console.log(enteredCredentials)
        }
    };

    return (

        <div className="signup-popup">
            <div>
                <form className="signup-form" action="#" onSubmit={submitHandler}>

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

                        <span className="form-span radio-container">
                            <div className="radio-group">
                                <label className="radio-label">Admin</label>
                                <input type="radio" name="account_type" value="admin" onChange={inputChangeHandler} />

                                <label className="radio-label">Teacher</label>
                                <input type="radio" name="account_type" value="teacher" onChange={inputChangeHandler} />

                                <label className="radio-label">Tutor</label>
                                <input type="radio" name="account_type" value="tutor" onChange={inputChangeHandler} />

                                <label className="radio-label">Student</label>
                                <input type="radio" name="account_type" value="student" onChange={inputChangeHandler} />
                            </div>
                        </span>

                        {enteredCredentials.account_type && enteredCredentials.account_type !== "admin" && (
                            <span className="form-span">
                                <label for="school" className="formLabel">School</label>
                                <input type="text" placeholder="School" id="school" name="school" className="textinputfield" onChange={inputChangeHandler}></input>
                            </span>
                        )}

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

