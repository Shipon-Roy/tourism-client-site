import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://tuorism-server-site.onrender.com/order', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Welcome Order Successfull');
                reset();
            }
        })
        console.log(data)
    };
    return (
        <div>
            <div className="text-center my-5">
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-5">Register as a Volunteer</h3>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Full Name" />
                <input defaultValue={user.email} {...register("email")} placeholder="E-mail" />
                <input type="text" {...register("place")} placeholder="Pleace Name" />
                <input type="date" {...register("date")} placeholder="Date" />
                <input type="submit" value="Submit" />
                <Link to="/order"><button type="submit" value="submit" className="btn btn-info w-100 my-3">Booking</button></Link>
            </form>
        </div>
        </div>
    );
};

export default MyOrder;<h1>This is MyOrder</h1>