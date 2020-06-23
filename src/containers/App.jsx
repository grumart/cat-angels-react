import React from "react";

import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "./Home/Home";

const App = props => {
    return (
        <div className="App">
            <Header />
            <Home/>
            <Footer />
        </div>
    );
};

export default App;