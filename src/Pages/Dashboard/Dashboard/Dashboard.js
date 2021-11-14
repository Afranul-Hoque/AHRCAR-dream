import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import Explore from '../../Explore/Explore';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProdcuts/ManageProducts';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (

        <div>
            <div className="navigation-section">
                <nav className="navbar navbar-expand-lg navbar-dark    ">
                    <div className="container-fluid">
                        <Link to="/home" className="nav-link active company-name"> Dashboard</Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon  "></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-link" id="navbarScroll">
                            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >


                                <Link to="/home" className="   nav-link active">Home</Link>

                                <Link to={`${url}`} className="   nav-link active">Dashboard</Link>




                                {/* <Link to="/dashboard" className=" text-white nav-link ">Dashboard</Link> */}







                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="row">

                {/* dashboard sidevar */}
                <div className="col-md-3 sidebar-section ps-5">

                    <div>
                        <Link to={`${url}/makeadmin`} className="   nav-link active">makeadmin</Link>
                    </div>

                    {
                        admin && <>
                            <div>
                                <Link to={`${url}/ManageProduct`} className="   nav-link active">ManageProducts</Link>
                            </div>
                            <div>
                                <Link to={`${url}/ManageProduct`} className="   nav-link active">ManagePro</Link>
                            </div>

                        </>
                    }








                </div>















                <div className="col-md-9">

                    <Switch>
                        <Route exact path={path}>
                            <Explore></Explore>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>

                        <Route path={`${path}/ManageProduct`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;