import React from 'react';
import Navigation from '../../Sharing/Navigation/Navigation';
import Achievement from '../Achievement/Achievement';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeService from '../HomeService/HomeService';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeService></HomeService>
            <Achievement></Achievement>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;