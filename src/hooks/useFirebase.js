import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        /* .then(result => {
            console.log(result.user);
        }) */
    }
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({})
        })
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
    
};

export default useFirebase;