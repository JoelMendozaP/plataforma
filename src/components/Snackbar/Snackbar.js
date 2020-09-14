import React from "react";
import "./Snackbar.css";
function Snackbar(props) {
  if (props.open) {
    setTimeout(function () {
      props.onClose();
    }, 3000);

    return (
      <div className="snackText">
        <i className="fas fa-circle-notch"></i>
        {props.message}
      </div>
    );
  }
  return null;
}

export default Snackbar;
