import React from "react";
import "./style/Message.css";
function Message(props) {
  return (
    <div className={`message ${props.typeM}`}>
      <div className="message__cont">{props.children}</div>
      <div className="message__hour">{props.time}</div>
    </div>
  );
}

export default Message;
