import React from "react";
import Translate from "./Translate";
import "./style/HeaderOption.css";
import ButtonModalS from "./ButtonModalS";
import { Link } from "react-router-dom";

function HeaderOption(props) {
  return (
    <div className="optionList">
      <ul className="optionList__ul">
        <li>
          <ButtonModalS
            onCloseModal={props.onCloseModal}
            modalIsOpen={props.modalIsOpen}
          />
        </li>
        <li>
          <Translate />
        </li>
        <li>
          <Link to="/theme" className="iconHeader">
            <i className="fas fa-moon"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderOption;
