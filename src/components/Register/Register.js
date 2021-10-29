import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import { useHistory, useLocation } from "react-router";



const Register = () => {
    const { user, googleSignIn, handleRegister, error, setUser, setUserName, verification, setError, setLoading } = useAuth();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from() || '/home'

    const handleName = e => {
        setName(e.target.value)

    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }




    const handleRegisterbtn = e => {
        e.preventDefault();
        setLoading(true)
        handleRegister(email, password)
            .then(result => {
                setUser(result.user);
                setUserName(name);
                history.push(url)
                verification();
                setError('')

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div >
            <Header></Header>
            <h1>Register Now </h1>

            <form onSubmit={handleRegisterbtn}>
                <label htmlFor="">Name</label><br />
                <input onBlur={handleName} type="text" name="" id="" placeholder='Your Name' /><br />
                <label htmlFor="">Email</label><br />
                <input onBlur={handleEmail} type="email" name="" id="" placeholder='Your Email' /><br />
                <label htmlFor="">Password</label><br />
                <input onBlur={handlePassword} type="password" name="" id="" placeholder='Your Password' /><br /><br />
                <input type="submit" value="Register" />

            </form>
            <br />
            {user?.email && <p className='text-info'>A  email verification link is sent in your email</p>}

            <br /><br />
            <p>   Already have an account? <Link to='/login'>Login Now </Link></p>
            <p>Or SignIn with</p>
            <button className='btn-warning rounded-pill fs-4' onClick={googleSignIn}>Google</button>
            <p className='text-danger'>{error}</p>

        </div>
    );
};

export default Register;