import "./style/CourseCard.css";

import React from "react";

import { useTranslation } from "react-i18next";
function CourseCard(props) {
  const { t } = useTranslation("CourseCard");
  return (
    <div className="CourseCard">
      <div className="CourseCard__header">
        <div className="CourseCard__title">{t("title")}</div>
        <div className="CourseCard__Price">{t("price")}</div>
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
        <button>{t("information")}</button>
      </div>
    </div>
  );
}

export default CourseCard;
