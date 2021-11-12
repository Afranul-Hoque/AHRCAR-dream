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
import AllServices from './Pages/Home/AllServices/AllServices';

function App() {
  return (
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
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
