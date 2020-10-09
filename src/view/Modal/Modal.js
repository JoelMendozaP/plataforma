import React from "react";
import "./Modal.css";
import { useStateValue } from "../../services/context/store";
function Modal(props) {
  const [{ openSnackbar }, dispatch] = useStateValue();
  function onClose() {
    dispatch({
      type: "OPEN_MODAL",
      open: false,
      content: null,
    });
    window.history.pushState(null, null, "/");
  }
  if (props.open) {
    return (
      <div className="Modal">
        <div className="Modal__container">
          <button onClick={onClose} className="Modal__close-button cta">
            X
          </button>
          {props.content}
        </div>
        {openSnackbar ? null : null}
      </div>
    );
  }
  return null;
}
export default Modal;
