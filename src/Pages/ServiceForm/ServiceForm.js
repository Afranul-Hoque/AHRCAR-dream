import axios from 'axios'

import React from 'react';
import { useForm } from "react-hook-form";
import './ServiceForm.css';


const ServiceForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/cars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Contact form fillup successfully');
                    reset();
                }
            })
    }



    return (
        <div>
            <div>
                <div className="add-service  ">
                    <h3 className="mb-4 text-center">Add  New Service</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("Brandname", { required: true, maxLength: 50 })} placeholder="Brandname" />
                        <input {...register("type", { required: true, maxLength: 50 })} placeholder="Type" />

                        <input {...register("fuel", { required: true, maxLength: 50 })} placeholder="fuel" />
                        <input {...register("img", { required: true, maxLength: 50 })} placeholder="img" />

                        <textarea {...register("description",)} placeholder="description" />
                        <input  {...register("price",)} placeholder="price" />

                        <input  {...register("year",)} placeholder="year" />
                        <input {...register("color", { required: true, maxLength: 20 })} placeholder="color" />


                        <button type="submit" className="submit-order mt-2">Place New Order</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ServiceForm;