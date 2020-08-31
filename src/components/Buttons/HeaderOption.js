import React from "react";
import Translate from "./Translate";
import "./HeaderOption.css";
function HeaderOption(props) {
  return (
    <div className="optionList">
      <ul className="optionList__ul">
        <li>
          <button className="btnUser">
            <span className="textUser">Ingresar</span>
            <i className="fas fa-user-circle"></i>
          </button>
        </li>
        <li>
          <Translate />
        </li>
        <li>
          <a href="/" className="iconHeader">
            <i className="fas fa-moon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderOption;
