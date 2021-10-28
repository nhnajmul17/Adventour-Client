import initializeAuthentication from "../Firebase/firebase.init"

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()
const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        setLoading(true)

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
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
        googleSignIn, logOut,
        user, error, loading
    }



}




export default useFirebase;