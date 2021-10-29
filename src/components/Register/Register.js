import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="text-center my-5">
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center mb-5">Register as a Volunteer</h3>
                <input defaultValue='{user.displayName}' {...register("name", { required: true, maxLength: 20 })} placeholder="Full Name" />
                <input defaultValue='{user.email}' {...register("email")} placeholder="E-mail" />
                <input type="date" {...register("date")} placeholder="Date" />
                <input type="submit" value="Register" />
                <p>Already I have a account? <Link to="/login">LogIn</Link></p>
            </form>
        </div>
    );
};

export default Register;