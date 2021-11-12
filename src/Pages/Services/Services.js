import React from 'react';
import AllServices from '../Home/AllServices/AllServices';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Sharing/Navigation/Navigation';

const Services = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllServices></AllServices>
            <Footer></Footer>
        </div>
    );
};

export default Services;