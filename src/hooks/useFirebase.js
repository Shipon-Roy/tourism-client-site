import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally( () => setIsloading(false))
    }
    useEffect( () => {
        const unKnownUser = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsloading(false)
        })
        return () => unKnownUser;
    }, [])

    const logOut = () => {
        setIsloading(true)
        signOut(auth)
        .then( () => { })
        .finally( () => setIsloading(false))
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
    
};

export default useFirebase;