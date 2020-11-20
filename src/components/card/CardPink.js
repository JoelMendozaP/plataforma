import React from "react";
import "./style/CardPink.css";
const CardPink = (props) => {
  return (
    <div className="CardPink">
      <div className="CardPink__title">{props.title}:</div>
      <div className="CardPink__data">{props.data}</div>
    </div>
  );
};

export default CardPink;
