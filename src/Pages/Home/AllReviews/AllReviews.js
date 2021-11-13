import React from 'react';
import './AllReviews.css';

const AllReviews = (props) => {
    const { Brandname, Customer, opinion } = props.review;
    return (
        <div >

            <div class="card allreview-section">
                <div class="card-body">
                    <h5 class="card-title">Brand: {Brandname}</h5>
                    <h6>Customer: {Customer}</h6>
                    <p class="card-text">{opinion}</p>
                </div>
            </div>
        </div>
    );
};

export default AllReviews;