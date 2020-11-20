import React from "react";
import "./style/Modal.css";
import { withRouter } from "react-router-dom";
const Modal = (props) => {
  function onClose() {
    props.history.push("/");
  }
  return (
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={onClose} className="Modal__close-button">
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default withRouter(Modal);
