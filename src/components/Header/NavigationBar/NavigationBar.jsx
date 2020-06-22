import React from "react";

import Logo from "../Logo/Logo";
import "./NavigationBar.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const NavigationBar = props => {
    return (
        <header className="NavigationBar">
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo />
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
        </header>
    );
};

export default NavigationBar;