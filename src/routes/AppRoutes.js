import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Login from "../Components/Login";
import Flipper from "../Components/Flipper";
import DealerSignup from "../Components/DealerSignup";
import DriverSignup from "../Components/DriverSignup";
import Flipper2 from "../Components/Flipper2";
import Dashboard from "../Components/Dashboard";
  export default function AppRoute(){
      return(
          <Router>
            <Route component={Login} path="/login" />
            <Route component={Flipper} path="/flipper" />
            <Route component={DealerSignup} path="/dealerSignup" />
            <Route component={DriverSignup} path="/driverSignup" />
            <Route component={Flipper2} path="/flipper2" />
            <Route component={Dashboard} path="/dashboard" />

          </Router>
      )
  }