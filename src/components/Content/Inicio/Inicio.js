import React from "react";
import CourseCard from "../../Card/CourseCard";
import "./Inicio.css";

function Inicio(props) {
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
