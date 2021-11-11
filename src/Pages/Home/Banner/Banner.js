import React from 'react';
import './Banner.css'
import img1 from '../../../Images/image1.jpg'
import img2 from '../../../Images/image2.jpg'
import img3 from '../../../Images/image3.jpg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner ">
                    <div className="carousel-item active banner-section">
                        <img src={img1} className="d-block w-100 banner-img " alt="..." />
                        <div className="carousel-caption banner-description d-none d-md-block">
                            <h5>Welcome to AHRCAR </h5>
                            <span className="short-description">AHRCAR is always ready to fulfill your dream, We will serve the best design and updated Car to you.</span>
                        </div>
                    </div>
                    <div className="carousel-item banner-section">
                        <img src={img2} className="d-block  banner-img w-100" alt="..." />
                        <div className="carousel-caption banner-description d-none d-md-block">
                            <h5>Amazing BMW Car 2021</h5>
                            <span className="short-description">BWM is the most famous car in this world. We have some better collections for you. </span>
                        </div>
                    </div>
                    <div className="carousel-item banner-section">
                        <img src={img3} className="d-block  banner-img w-100" alt="..." />
                        <div className="carousel-caption banner-description d-none d-md-block">
                            <h5>Amazing Car to gift for your loving person  </h5>
                            <span className="short-description">Fulfill your dream. Take a car for your loving person and give a surprise to him.</span>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;