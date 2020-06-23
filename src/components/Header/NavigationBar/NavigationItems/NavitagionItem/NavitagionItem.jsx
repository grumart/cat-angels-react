import React from "react";

import "./NavigationItem.css";

const NavitagionItem = props => {
    let attachedClasses = ["NavigationItem"];
    if (props.cta) {
        attachedClasses = ["NavigationItem", "NavigationItem-cta"];
    }
    return (
        <li className={attachedClasses.join(' ')}>
            <a href={props.link}
                className={props.active ? "active" : null}>{props.children}</a>
        </li>
    );
};

export default NavitagionItem;