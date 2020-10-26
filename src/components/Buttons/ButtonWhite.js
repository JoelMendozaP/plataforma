import React from "react";
import "./style/ButtonWhite.css"
function ButtonWhite(props) {
  return (
      <button className="ButtonWhite" onClick={props.onClick}>{props.children}</button>
  );
}

export default ButtonWhite;
