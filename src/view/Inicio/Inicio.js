import "./Inicio.css";

import CourseCard from "../../components/Card/CourseCard";
import Category from "../../components/Information/Category";

import React, { useEffect } from "react";
import { useStateValue } from "../../services/context/store";
import { useTranslation } from "react-i18next";

function Inicio(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();
  const { t } = useTranslation("Inicio");

  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Category />,
    });
  }, [dispatch, sesionUsuario]);
  return (
    <div className="Courses">
      <div className="Courses__Title">{t("courses")}</div>
      <div className="Courses__category">{t("coursesOffer")}</div>
      <div className="Courses__cards">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <br />
      <div className="Courses__category">{t("coursesRecommended")}</div>
      <div className="Courses__cards">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Inicio;
