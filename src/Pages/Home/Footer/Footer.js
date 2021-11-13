import React from 'react';
import './Footer.css';
import payments from '../../../Images/money.jpg'

const Footer = () => {
    return (
        <div className=" footer-section py-5 px-5">
            <div className="row pt-3">

                <div className="col-md-4">
                    <div>
                        <h3 >AHRCAR</h3>
                        <div className="mt-5">
                            <p>AHRCAR is a Car selling company in this world. We sell cars online and offline for our customers. We give many offers and coupons to our customers. Our company sells all categories car because we know there are lot of people have different capacity.
                            </p>
                        </div>

                        <div>
                            {/* social link */}
                            <h5 className="follow">Follow Us</h5>
                            <div className="pt-3">
                                <i class="fab fa-facebook-f pe-3"></i>
                                <i class="fab fa-instagram pe-3"></i>
                                <i class="fab fa-twitter pe-3"></i>
                                <i class="fab fa-youtube pe-3"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 ">
                    <h3 >Contact Us</h3>
                    <div>
                        <div className="mt-5">
                            <span><i className="fas fa-phone pe-3"></i></span>
                            <span>0190000000 , </span>
                            <span>0170000000</span>
                        </div>
                        <div className="mt-3">
                            <span><i className="fas fa-envelope pe-3"></i></span>
                            <span> admin2@gmail.com ,</span>

                            <span> ahrcar@gmail.com</span>
                        </div>

                        <div className="mt-3">
                            <span><i className="fas fa-map-marker-alt pe-3"></i></span>
                            <span>13/D Hospital Road,</span>

                            <span> Dhanmondi, Dhaka</span>
                        </div>
                    </div>
                </div>


                {/* payment method */}

                <div className="col-md-4 ">

                    <h3 >We Accepts</h3>
                    <div className="mt-5">
                        <img className="img-fluid" src={payments} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;