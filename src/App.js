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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
