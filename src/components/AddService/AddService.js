import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://glacial-fjord-55155.herokuapp.com/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Services Add successfull');
                reset();
            }
        })
    };
    return (
        <div className="text-center my-5">
            <h1>Add a new serivce</h1>
            <form className="service-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Name" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Images URL" />
                
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;<h1>This is Add a new serivce</h1>