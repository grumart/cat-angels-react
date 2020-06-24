import React from "react";

import "./Card.css";

const Card = props => {
    return (
        <div className="Card">
          <div className="Card-icon">{props.cardTitle}</div>
        <div className="Card-text">
          <p>{props.children}</p>
        </div>
      </div>
    );
};

export default Card;