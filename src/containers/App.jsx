import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "./Home/Home";
import Volunteer from "./Volunteer/Volunteer";

const App = props => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/volunteer" component={Volunteer} />
            </Switch>
            <Footer />
        </div>
    );
};

export default withRouter(App);