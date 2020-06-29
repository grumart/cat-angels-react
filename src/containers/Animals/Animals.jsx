import React from "react";

import "./Animals.css";
import List from "./animalList";
// import Img from "../../components/UI/Image/Img";
import Cat from "../../components/UI/Cat/Cat";
// import Card from "../../components/UI/Card/Card";

const Animals = props => {

    // const catCardHandler = props => {
    //     return (
    //         <Card cardTitle="xyz">Lorem Ipsum </Card>
    //     )
    // }
  
    return (
        <div className="Animals">
           
              {List.map(cat => (
                  <Cat 
                  key={cat.catId} 
                  src={cat.catSrc}
                  name={cat.name}
                  sex={cat.sex}
                  breed={cat.breed}
                  color={cat.color}
                  coat={cat.coat}
                  altered={cat.altered}
                  age={cat.age}
                  description={cat.description} />
              ))}
            

        </div>
    );
};

export default Animals;