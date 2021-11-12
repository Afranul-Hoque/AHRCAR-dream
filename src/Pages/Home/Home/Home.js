import React from 'react';
import Navigation from '../../Sharing/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeService from '../HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeService></HomeService>
            <Footer></Footer>

        </div>
    );
};

export default Home;