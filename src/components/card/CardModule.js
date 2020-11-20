import "./style/CardModule.css";
import React, { useState } from "react";

import { Loading } from "../../components/animation/index";
import { CardLesson } from "./index";

function CardModule(props) {
  const [view, setView] = useState(false);
  const listModulo = () => {
    let list = [];
    if (props.lesson) {
      for (let i = 0; i < props.lesson.length; i++) {
        list.push(
          <CardLesson key={i} description={props.lesson[i].description}>
            {props.lesson[i].name}
          </CardLesson>
        );
      }
      return list;
    } else {
      return Loading;
    }
  };
  return (
    <div className="CardModule">
      <div
        onClick={() => {
          setView(!view);
        }}
        className="CardModule__title"
      >
        <span>{props.children}</span>
        <i className={`fas fa-angle-${view ? "down" : "right"}`}></i>
      </div>
      <div className="CardModule__list">{view ? listModulo() : null}</div>
    </div>
  );
}

export default CardModule;
