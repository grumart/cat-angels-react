import React from "react";

import "./NavigationItems.css"
import NavigationItem from "./NavitagionItem/NavitagionItem";


const NavitagionItems = props => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/volunteer">Volunteer</NavigationItem>
            <NavigationItem link="/adopt">Adopt</NavigationItem>
            <NavigationItem link="/animals">Animals</NavigationItem>
            <NavigationItem link="/wait">Wait List</NavigationItem>
            <NavigationItem link="/shop">Thrift Shop</NavigationItem>
            <NavigationItem cta link="/donate">DONATE</NavigationItem>
        </ul>
    );
};

export default NavitagionItems;