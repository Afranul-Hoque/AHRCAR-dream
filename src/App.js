import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Explore from './Pages/Explore/Explore';
import Services from './../src/Pages/Services/Services'
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Review from './Pages/Review/Review';
import Navigation from './Pages/Sharing/Navigation/Navigation';
import Footer from './Pages/Home/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/purchase/:purchaseId">
            <Navigation></Navigation>
            <Purchase></Purchase>
            <Footer></Footer>
          </PrivateRoute>

          <PrivateRoute path="/review">
            <Navigation></Navigation>
            <Review></Review>
            <Footer></Footer>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
