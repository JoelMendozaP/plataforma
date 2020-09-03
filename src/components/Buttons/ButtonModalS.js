import React from "react";
import Login from "../../containers/Login/Login";
import "./style/ButtonModalS.css";
function ButtonModalS(props) {
  return (
    <React.Fragment>
      <button onClick={props.onCloseModal} className="ButtonModalS">
        <span className="ButtonModalS__text">Ingresar</span>
        <i className="fas fa-user-circle"></i>
      </button>
      <Login isOpen={props.modalIsOpen} onClose={props.onCloseModal} />
    </React.Fragment>
  );
}

export default ButtonModalS;
