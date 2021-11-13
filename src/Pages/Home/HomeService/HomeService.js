import React, { useEffect, useState } from 'react';
import HomeServices from '../HomeServices/HomeServices';
import './HomeService.css'

const HomeService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])
    return (
        <div className="allService-section">
            <div className=" my-5 pb-4">
                <div className="mb-5 text-center">
                    <h5 className="choose-carservice">Our Amazing Services</h5>
                    <h3 className="carservice">Select your Dream car</h3>
                </div>

                <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    {
                        services.map(service => <HomeServices
                            key={service._id}
                            service={service}
                        ></HomeServices>)
                    }

                </div>

            </div>

        </div >
    );
};

export default HomeService;