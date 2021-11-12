import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServices.css'

const HomeServices = (props) => {
    const { price, type, description, img, year, color, Brandname, _id } = props.service;
    return (
        <div>
            <div className="card service-img card-description mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                <img src={img} className="card-img-top image-size " alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{Brandname}</h3>
                    <h5>Color: {color}</h5>
                    <p>{description}</p>
                    <span> <span className="cost">${price}</span></span>
                    <span><i class="fas fa-calendar-alt ms-5 px-1"></i> <span className="duration">
                        {year}</span></span>


                    <div className=" mt-3">
                        <Link to={`/booking/${_id}`}>
                            <button type="button" className=" details-button mt-2 py-2"> Buy Now</button>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HomeServices;