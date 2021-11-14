import axios from 'axios'

import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css'

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://polar-reef-74830.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review submitted successfully');
                    reset();
                }
            })
    }

    return (
        <div >
            <div>
                <div className="add-service my-5 py-4 ">
                    <h3 className="mb-4 text-center">Give Your Review</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("Brandname", { required: true, maxLength: 50 })} placeholder="Brandname" />
                        <input {...register("Customer", { required: true, maxLength: 50 })} placeholder="Customer Name" />


                        <textarea maxlength="250" {...register("opinion",)} placeholder="opinion in 250 words" />


                        <button type="submit" className="submit-order mt-2">Submit Review</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Review;