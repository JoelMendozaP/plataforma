import React from "react";
import "./style/CourseCard.css";
import { ButtonPink } from "../buttons";
import { withRouter } from "react-router-dom";
const CourseCard = (props) => {
  const ViewInfprmation = () => {
    props.history.push("/graduates");
  };
  return (
    <div className="CourseCard">
      <div className="CourseCard__main">
        <div className="CourseCard__information">
          <h3 className="CourseCard__Infh3">SQL para el analisis de datos</h3>
          <div className="CourseCard__price">
            <h3>18,99 US$</h3>
            <div className="CourseCard__discount">
              <p>129,99 US$</p>
              <span>85 % de descuento</span>
            </div>
          </div>
          <ButtonPink onClick={ViewInfprmation}>Ver mas informacion</ButtonPink>
        </div>
        <div className="CourseCard__video">
          <div className="CourseCard__vTitle">Introduccion</div>
          <div className="CourseCard__play">
            <i className="fas fa-play-circle"></i>
          </div>
          <div className="CourseCard__vIcons">
            <div className="CourseCard__Icon">
              <i className="fas fa-star"></i>
              <span>5.0</span>
            </div>
            <div className="CourseCard__Icon">
              <i className="fas fa-user-friends"></i>
              <span>151</span>
            </div>
            <div className="CourseCard__Icon">
              <i className="fas fa-clock"></i>
              <span>165 min</span>
            </div>
          </div>
        </div>
      </div>
      <div className="CourseCard__options">
        <i className="fas fa-bars"></i>
        <i className="far fa-heart"></i>
        <i className="fas fa-info"></i>
      </div>
    </div>
  );
};

export default withRouter(CourseCard);
