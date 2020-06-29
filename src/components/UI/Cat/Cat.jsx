import React from "react";

import "./Cat.css";

const Cat = props => {
 

    return (
        <div className="Cat">
            <div className="Cat-img">
                <img src={props.src} alt={props.alt} />
            </div>
            <div className="Cat-info">
                <ul className="Cat-info-list">
                    <li>Name</li>
                    <li>Sex</li>
                    <li>Breed</li>
                    <li>Color</li>
                    <li>Coat</li>
                    <li>Altered</li>
                    <li>Age</li> 
                </ul>
                <ul className="Cat-info-list">
                    <li>{props.name}</li>
                    <li>{props.sex}</li>
                    <li>{props.breed}</li>
                    <li>{props.color}</li>
                    <li>{props.coat}</li>
                    <li>{props.altered}</li>
                    <li>{props.age}</li> 
                </ul>
            </div>
            <div className="Cat-description">
                {/* <h4>Description:</h4> */}
                {/* {props.description.substring(0,250) + "..." }  */}
                <details>
                    <summary>Description:</summary>
                        <p>{props.description}</p>
                </details>
            </div>

        </div>
    );
};

export default Cat;