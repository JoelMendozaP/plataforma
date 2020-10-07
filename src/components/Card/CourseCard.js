import React from "react";
import "./style/CourseCard.css";
function CourseCard(props) {
  return (
    <div className="CourseCard">
      <div className="CourseCard__header">
        <div className="CourseCard__title">SQL para el análisis de datos</div>
        <div className="CourseCard__Price">US$19</div>
      </div>
      <div className="CourseCard__video">
        <i className="fas fa-play-circle"></i>
      </div>
      <div className="CourseCard__info">
        <div className="CourseCard__IconStar">
          <i className="fas fa-star"></i>
          5.0
        </div>
        <div className="CourseCard__IconFriends">
          <i className="fas fa-user-friends"></i>
          151
        </div>
        <div className="CourseCard__IconClock">
          <i className="fas fa-clock"></i>
          165 min
        </div>
      </div>
      <div className="CourseCard__btn">
        <button>Infromacion</button>
      </div>
    </div>
  );
}

export default CourseCard;
