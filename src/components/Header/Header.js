import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo-1.png'
import './Header.css'

const Header = () => {
    const {user , logOut} = useAuth();
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/myOrder">My Orders</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/manageOrder">Manage All Orders</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/addService">Add A New Service</Link>
                        </li>
                    </ul>
                    </div>
                        <img className="email-img" src={user.photoURL} alt="" />
                        <p className="pt-2 me-2">{user.displayName}</p>
                    {user.email ? <button onClick={logOut} className="btn btn-info px-5">LogOut</button>
                    :
                    <Link to="/logIn"><button className="btn btn-info px-5">LogIn</button></Link>}
                </div>
            </nav>
        </div>
    );
};

export default Header;