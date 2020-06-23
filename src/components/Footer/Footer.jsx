import React from "react";

import Address from "./Address/Address";
import Hours from "./Hours/Hours";
import SocialMedia from "./SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = props => {
    return (
        <footer className="Footer">
            <Address />
            <SocialMedia />
            <Hours />
        </footer>
        
    );
};

export default Footer;