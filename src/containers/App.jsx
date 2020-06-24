import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "./Home/Home";
import Volunteer from "./Volunteer/Volunteer";
import Adopt from "./Adopt/Adopt";
import WaitList from "./WaitList/WaitList";
import TriftShop from "./TriftShop/TriftShop";

const App = props => {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/volunteer" component={Volunteer} />
                <Route path="/adopt" component={Adopt} />
                <Route path="/waitList" component={WaitList} />
                <Route path="/shop" component={TriftShop} />
            </Switch>
            <Footer />
        </div>
    );
};

export default withRouter(App);