import React, { useState } from 'react';
import './Login.css'
import headquater from '../../Images/headquater.jpg'
import { Link, NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, isloding, loginUser, authError, signInWithGoogle } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLogindata = { ...loginData };
        newLogindata[field] = value;
        setLoginData(newLogindata);

    }

    const handleLoginSubmit = e => {
        alert('Submitted form successfully');
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();


    }

    return (
        <div className="container">


            <div className="row">

                <div className="col-md-6">

                    <div className="my-5">
                        <h3>Please Login Here</h3>
                    </div>

                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">

                            <input
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">

                            <input
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                                onChange={handleOnChange} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <p>--------------------</p>

                    <Link to="/register" className="  nav-link "> New User? Please Register Here</Link>


                </div>

                <div className="col-md-6">
                    <div className="my-5 text-center">
                        <h3>Our HeadOffice</h3>

                    </div>

                    <div className="headquater text-center">
                        <img src={headquater} alt="" />
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Login;