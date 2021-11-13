import React from 'react';
import './Achievement.css'

const Achievement = () => {
    return (
        <div className=" mt-5  pb-4 achivement-section">
            <div className="mb-5 text-center">
                <h3 className="achievement"> AHRCAR Achievements</h3>

            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center mx-5">
                    <div className="col">

                        <div >
                            <i class="fas fa-car icons"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="text-white pb-2">950+ </h4>
                            <h5 className="card-title text-white">Total <span className="achieves">Cars</span> </h5>


                        </div>
                    </div>
                    <div className="col">

                        <div >
                            <i class="far fa-comment-dots icons"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="text-white pb-2">1123 </h4>
                            <h5 className="card-title text-white">Dealer  <span className="achieves">Reviews</span></h5>


                        </div>
                    </div>
                    <div className="col">

                        <div >
                            <i class="far fa-user icons"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="text-white pb-2">417 </h4>
                            <h5 className="card-title text-white">Happy  <span className="achieves">Clients</span></h5>


                        </div>
                    </div>
                    <div className="col">

                        <div >
                            <i class="fas fa-award icons"></i>
                        </div>
                        <div className="card-body">
                            <h4 className="text-white pb-2">950+ </h4>
                            <h5 className="card-title text-white">Award  <span className="achieves">Winning</span></h5>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;