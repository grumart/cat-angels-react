import React from "react";

import "./Paragraph.css"

const Paragraph = props => {
    let attatchedClassed = ["Paragraph"];
    if (props.paragraphBlue) {
        attatchedClassed = [...attatchedClassed, "Paragraph-blue"];
    }

    return (
        <p className={attatchedClassed.join(" ")}>{props.children}</p>
    );
};

export default Paragraph;