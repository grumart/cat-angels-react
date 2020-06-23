import React from "react";

import Address from "./Address/Address";
import Hours from "./Hours/Hours";
import SocialMedia from "./SocialMedia/SocialMedia";
import Copyright from "./Copyright/Copyright";
import "./Footer.css";

const Footer = props => {
    return (
        <footer >
            <div className="Footer">
                <Address />
                <SocialMedia />
                <Hours />
            </div>
            <Copyright />
        </footer>
        
    );
};

export default Footer;