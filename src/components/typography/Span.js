import React from "react";
import "./Span.css";
function Span(props) {
  return (
    <div className={props.class_div}>
      <span className={props.class_span}>{props.children}</span>
    </div>
  );
}

export default Span;
