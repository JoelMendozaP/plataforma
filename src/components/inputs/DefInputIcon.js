import React from "react";
import "./DefInputIcon.css";
function DefInputIcon(props) {
  return (
    <div className="DefInputIcon__div">
      <i className={`fas fa-${props.icon}`}></i>
      <input
        className="DefInputIcon__input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue ? props.defaultValue : null}
        onChange={props.onChange}
        required
      />
    </div>
  );
}

export default DefInputIcon;
