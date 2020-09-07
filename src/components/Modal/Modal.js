import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { Link } from "react-router-dom";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <Link to="/" onClick={props.onClose} className="Modal__close-button">
          X
        </Link>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
