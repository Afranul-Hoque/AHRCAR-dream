import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import HomeServices from '../HomeServices/HomeServices';
import './AllServices.css'


const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="allService-section">
            <div className=" my-5 pb-4">
                <div className="mb-5 text-center">
                    <h5 className="choose-cars">Our Amazing Services</h5>
                    <h3 className="cars">Select your Dream car</h3>
                </div>

                <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {
                        services.map(service => <AllService
                            key={service._id}
                            service={service}
                        ></AllService>)
                    }

                </div>

            </div>

        </div >
    );
};

export default AllServices;