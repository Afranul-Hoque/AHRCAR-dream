import React, { useEffect, useState } from 'react';
import AllReviews from '../AllReviews/AllReviews';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://polar-reef-74830.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className="container">
            <div className="allService-main ">
                <div className=" my-5 pb-4">
                    <div className="mb-5 text-center">
                        <h5 className="choose-reviews">Our Customers Reviews</h5>
                        <h3 className="reviews">Give your important feedback</h3>
                    </div>

                    <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                        {
                            reviews.map(review => <AllReviews
                                key={review._id}
                                review={review}
                            ></AllReviews>)
                        }

                    </div>
                </div>

            </div>

        </div >
    );
};

export default Reviews;