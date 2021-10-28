import React from 'react';
import useAuth from '../Hooks/useAuth';

const Home = () => {
    const { googleSignIn } = useAuth();
    return (
        <div>
            <h3>This is Home</h3>
            <button onClick={googleSignIn}>Google</button>
        </div>
    );
};

export default Home;