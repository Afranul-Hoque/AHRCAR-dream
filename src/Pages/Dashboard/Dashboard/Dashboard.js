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
import AdminRoute from '../../AdminRoute/AdminRoute';
import Explore from '../../Explore/Explore';
import ManageAllOrder from '../../ManageAllOrder/ManageAllOrder';
import MyOrders from '../../MyOrders/MyOrders';
import Payment from '../../Payment/Payment';
import Review from '../../Review/Review';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

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


                    {
                        !admin && <>

                            <div>
                                <Link to={`${url}/myorders`} className="   nav-link active">My-Orders</Link>
                            </div>
                            <div>
                                <Link to={`${url}/review`} className="   nav-link active">review</Link>
                            </div>
                            <div>
                                <Link to={`${url}/payment`} className="   nav-link active">payment</Link>
                            </div>



                            <div>
                                <Link to="/home" onClick={logOut} className=" nav-link "> <i className="fas fa-user pe-1"></i>Log out</Link>
                            </div>

                        </>
                    }




                    {
                        admin && <>

                            <div>
                                <Link to={`${url}/manageallorder`} className="   nav-link active">Manage All Orders</Link>
                            </div>
                            <div>
                                <Link to={`${url}/addnewproduct`} className="   nav-link active">Add New Product</Link>
                            </div>
                            <div>
                                <Link to={`${url}/makeadmin`} className="   nav-link active">Make New-Admin</Link>
                            </div>
                            <div>
                                <Link to={`${url}/manageproducts`} className="   nav-link active">Manage Products</Link>
                            </div>
                            <div>
                                <Link to="/home" onClick={logOut} className=" nav-link "> <i className="fas fa-user pe-1"></i>Log out</Link>
                            </div>

                        </>
                    }

                </div>















                <div className="col-md-9">

                    <Switch>

                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageallorder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </AdminRoute>

                        <AdminRoute path={`${path}/addnewproduct`}>
                            <AddNewProduct></AddNewProduct>
                        </AdminRoute>

                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>

                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>

                    </Switch>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;