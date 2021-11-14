import React from 'react';
import payment from '../../Images/money.jpg'

const Payment = () => {
    return (
        <div className="text-center my-5">
            <h3>Payment system coming soon.
            </h3>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={payment} alt="" />
                </div>



                <div className="col-md-6"></div>
            </div>
        </div>
    );
};

export default Payment;