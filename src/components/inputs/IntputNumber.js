import React from "react";
import "./style/IntputNumber.css";
function IntputNumber(props) {
  return (
    <div className="IntputNumber number-input">
      {props.children}
      <input
        type="number"
        name={props.name}
        value={props.value ? props.value : 0}
        onChange={props.onChange}
      />
    </div>
  );
}

export default IntputNumber;
