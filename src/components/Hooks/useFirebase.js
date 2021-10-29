import initializeAuthentication from "../Firebase/firebase.init"

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()
const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);

    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => { })
    }



    const handleRegister = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }



    const handleLogin = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)

    }


    const googleSignIn = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }



    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({})
            }
            setLoading(false)

        });
    }, [])


    return {
        googleSignIn, logOut, handleRegister, handleLogin,
        user, setUser, error, setError, loading, setLoading, setUserName, verification
    }



}




export default useFirebase;