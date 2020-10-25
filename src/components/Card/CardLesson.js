import React, { useState } from "react";
import "./style/CardLesson.css";
function CardLesson(props) {
  const [view, setView] = useState(false);
  return (
    <div className="CardLesson">
      <div className="CardLesson__left">
        <span>{props.children}</span>
        <div className="CardLesson__description">
          {view ? <p>{props.description}</p> : null}
        </div>
      </div>
      <div className="CardLesson__right">
        <i
          onClick={() => {
            setView(!view);
          }}
          className={`fas fa-angle-${view ? "down" : "right"}`}
        ></i>
      </div>
    </div>
  );
}

export default CardLesson;
