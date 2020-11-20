import React from "react";
import "./style/ErrorMsg.css"
const ErrorMsg = (props) => {
  return <p className="ErrorMsg">{props.children}</p>;
};

export default ErrorMsg;
