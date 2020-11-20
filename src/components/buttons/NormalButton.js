import React from "react";
import "./style/NormalButton.css"
const NormalButton = (props) => {
  return (
    <button className="NormalButton" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default NormalButton;
