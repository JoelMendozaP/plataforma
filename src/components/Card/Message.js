import React from "react";
import "./style/Message.css";
function Message(props) {
  return (
    <div className={`message ${props.typeM}`}>
      <div className="message__cont">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="message__hour">11:08 pm</div>
    </div>
  );
}

export default Message;
