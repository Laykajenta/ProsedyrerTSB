import React from "react";
//import { robots } from "./robots";

//import "react\ProsedyreTSB\src\Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow bg-washed-yellow dib br3 pa3 ma2 grow bw2 shadow-">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
