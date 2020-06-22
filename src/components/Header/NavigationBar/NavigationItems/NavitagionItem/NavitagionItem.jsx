import React from "react";

import "./NavigationItem.css";

const NavitagionItem = props => {
    return (
        <li className="NavigationItem">
            <a href={props.link}
                className={props.active ? "active" : null}>{props.children}</a>
        </li>
    );
};

export default NavitagionItem;