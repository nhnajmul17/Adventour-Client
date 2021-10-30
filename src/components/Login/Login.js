import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import { useHistory, useLocation } from "react-router";
import Footer from '../Shared/Footer/Footer';



const Login = () => {

    const { googleSignIn, handleLogin, error, setUser, setError, setLoading } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"



    const handlegoogleSignIn = () => {
        setLoading(true)
        googleSignIn()
            .then(result => {
                setUser(result.user)
                history.push(url)

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }



    const handleLoginbtn = (e) => {
        e.preventDefault();
        setLoading(true)
        handleLogin(email, password)

            .then(result => {
                setUser(result.user);
                history.push(url)
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
            <div className='mb-5'>
                <h1>Please Sign In </h1>
                <form onSubmit={handleLoginbtn}>
                    <label htmlFor="">Email</label><br />
                    <input onBlur={handleEmail} type="email" name="" id="" /><br />
                    <label htmlFor="">Password</label><br />
                    <input onBlur={handlePassword} type="password" name="" id="" /><br /><br />
                    <input type="submit" value="Login" />

                </form>
                <br /><br />

                <p>New To this Website? <Link to='/register'>Register now </Link> </p>
                <p>Or SignIn with</p>
                <button className='btn-warning rounded-pill fs-4' onClick={handlegoogleSignIn}>Google</button>
                <p className='text-danger'>{error}</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;