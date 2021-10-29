import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url)
        })
    }

    return (
        <div className="text-center p-5">
            <div className="mx-auto shadow w-50 p-5">
            <h3>Login with</h3>
            <button onClick={handleGoogleLogIn} className="rounded-pill my-3"><i className="fab fa-google text-danger"></i><small className="mx-5">Continue with Google</small></button>
            <p>Don't have an account? <Link to="/register">create an account</Link></p>
            </div>
        </div>
    );
};

export default LogIn;