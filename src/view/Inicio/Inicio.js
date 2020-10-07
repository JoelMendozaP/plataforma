import React, { useEffect } from "react";
import CourseCard from "../../components/Card/CourseCard";
import Category from "../../components/Information/Category";
import { useStateValue } from "../../services/context/store";
import "./Inicio.css";

function Inicio(props) {
  const [{ sesionUsuario }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "CHANGE_INFO",
      data: <Category />,
    });
  }, [dispatch, sesionUsuario]);
  return (
    <div className="Courses">
      <div className="Courses__Title">Cursos</div>
      <div className="Courses__category">Cursos en Oferta</div>
      <div className="Courses__cards">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <br />
      <div className="Courses__category">Cursos Recomendados</div>
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
