import React from "react";

import "./Section.css";

const Section = props => {
    return(
        <div className={["Section", [props.sectionType], [props.gridType]].join(" ")}>
            {props.children}
        </div>
    );
};

export default Section;