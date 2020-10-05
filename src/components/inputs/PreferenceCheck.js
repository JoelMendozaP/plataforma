import React from "react";
import "./PreferenceCheck.css";
function PreferenceCheck(props) {
  return (
    <div className="checkP">
      <span className="checkP__span">{props.children}</span>
      <div className="checkP__toggle">
        <input
          type="checkbox"
          name={props.name}
          onChange={props.onChange}
          checked={props.value ? props.value : false}
        />
        <label htmlFor="" className="onbtn">
          <i className="fas fa-check"></i>
        </label>
        <label htmlFor="" className="ofbtn">
          <i className="fas fa-times"></i>
        </label>
      </div>
    </div>
  );
}

export default PreferenceCheck;
