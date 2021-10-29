import React from 'react';
import logo from '../../images/logo-1.png'

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 p-5">
                        <img className="bg-white" src={logo} alt="" />
                        <p className="text-secondary mt-5">Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.</p>
                    </div>
                    <div className="col-lg-4 p-5">
                        <h3 className="text-white">Company</h3>
                        <div className="text-secondary mt-3">
                            <h6>Home</h6>
                            <h6>My Orders</h6>
                            <h6>Manage All Orders</h6>
                            <h6>Add A New Service</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 p-5">
                        <h3 className="text-white">Newsletter</h3>
                        <input className=" rounded p-3 mt-3" type="email" placeholder="Enter Your E-mail" />
                        <br />
                        <button className="btn btn-info mt-2">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;<h1>This is Footer</h1>