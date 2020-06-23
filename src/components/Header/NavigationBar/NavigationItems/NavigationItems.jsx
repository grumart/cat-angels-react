import React from "react";

import "./NavigationItems.css"
import NavigationItem from "./NavitagionItem/NavitagionItem";


const NavitagionItems = props => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/">Volunteer</NavigationItem>
            <NavigationItem link="/">Adopt</NavigationItem>
            <NavigationItem link="/">Animals</NavigationItem>
            <NavigationItem link="/">Wait List</NavigationItem>
            <NavigationItem link="/">Thrift Shop</NavigationItem>
            <NavigationItem cta link="/">Donate</NavigationItem>
        </ul>
    );
};

export default NavitagionItems;