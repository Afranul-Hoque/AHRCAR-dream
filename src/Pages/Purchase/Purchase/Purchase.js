import { useForm } from "react-hook-form";
import axios from 'axios';
import './Purchase.css'

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from "../../../Hooks/useAuth";
const Purchase = () => {

    const { purchaseId } = useParams();
    const [purchases, setPurchases] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        fetch(`https://polar-reef-74830.herokuapp.com/cars/${purchaseId}`)
            .then(res => res.json())
            .then(data => setPurchases(data))
    }, [purchaseId])

    // submitted form

    const onSubmit = data => {
        console.log(data);
        axios.post('https://polar-reef-74830.herokuapp.com/clients', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Purchase form submit successfully');
                    reset();
                }
            })
    }

    return (

        <div className="booking-section">
            <div className="text-center mt-5">
                <h3>Your Dream Car Here</h3>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">


                    <div className="card service-img card-description mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={purchases.img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{purchases.Brandname}</h3>
                            <h6 className="card-title">{purchases.type}</h6>
                            <span>Color: {purchases.color}, </span>
                            <span className="fuel">Fuel: {purchases.fuel}</span>
                            <p>{purchases.description}</p>
                            <span> <span className="cost">${purchases.price}</span></span>
                            <span><i class="fas fa-calendar-alt ms-5 px-1"></i> <span className="year">
                                {purchases.year}</span></span>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <div className="add-purchase  ">
                            <h3 className="mb-4 text-center">Add  Some Information</h3>
                            <div className="mb-3 ms-5">
                                {/* <h5>User Name: <span className="user-info">{user.displayName}</span> </h5> */}
                                <h5>User-Email: <span className="user-info">{user.email}</span> </h5>
                            </div>



                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("Username", { required: true, maxLength: 50 })} placeholder="Your Name" />
                                <input {...register("address", { required: true, maxLength: 50 })} placeholder="Address" />

                                <input {...register("Brand", { required: true, maxLength: 50 })} placeholder="Brand name" />


                                <input type="number" {...register("phone",)} placeholder="phone number" />



                                <button type="submit" className="submit-order mt-2">Purchase New Car</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Purchase;