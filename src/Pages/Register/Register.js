import React, { useState } from 'react';
import './Register.css'
import { NavLink, useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isloding, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        // console.log(field, value, newLogindata);

        setLoginData(newLogindata);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        alert('Submitted form successfully')
        registerUser(loginData.email, loginData.password, loginData.name, location, history)
        e.preventDefault();
    }

    return (
        <div className="container register-section ">
            <div className="my-5">
                <h3>Please Register Here</h3>
            </div>

            <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                    <input onBlur={handleOnBlur} placeholder="Enter your Name" type="name" className="form-control" name="name" id="exampleInputName" aria-describedby="emailHelp" />

                    <input onBlur={handleOnBlur} placeholder="Enter your email" type="email" name="email" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">

                    <input placeholder="Enter your password" type="password" name="password" onBlur={handleOnBlur} className="form-control" id="exampleInputPassword1" />

                    <input placeholder="ReEnter password" type="password" name="password2" onBlur={handleOnBlur} className="form-control mt-3" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/login" className="  nav-link "> Already Register? Please Login Here</Link>
        </div>
    );
};

export default Register;