import React from "react";
import "./style/InfomationCourse.css";
import { ButtonPink, ButtonWhite } from "../../buttons";
function InfomationCourse(props) {
  const course = props.course;
  return (
    <div className="InfomationCourse">
      <span className="title">Precio Curso</span>
      <div className="InfomationCourse__card">
        <div className="InfomationCourse__header">
          <div className="InfomationCourse__price">
            <span className="price">{course.price}</span>
            <span className="discount">{course.discount} % de descuento</span>
          </div>
          <span className="InfomationCourse__realPrice">
            {course.realPrice}
          </span>
        </div>
        <div className="InfomationCourse__btns">
          <ButtonPink>Comprar Ahora</ButtonPink>
          <ButtonWhite>Añadir al carrito</ButtonWhite>
        </div>
        <span className="offerTime">¡La oferta termina en 05 horas!</span>
      </div>
      {/* <div className="InfomationCourse__description"> */}
        <span className="title">Descripción del curso</span>
        <div className="InfomationCourse__cardBorder">
          <p>{course.description ? course.description.content : ""}</p>
          <div className="InfomationCourse__dataIcon">
            <i className="fas fa-certificate"></i>
            <span>
              {course.description
                ? course.description.certificate
                  ? "Certifícate al terminar"
                  : "No incluye Certificado"
                : ""}
            </span>
          </div>
          <div className="InfomationCourse__dataIcon">
            <i className="fab fa-buffer"></i>
            <span>{course.description ? course.description.level : ""}</span>
          </div>
          <div className="InfomationCourse__dataIcon">
            <i className="fas fa-language"></i>
            <span>{course.description ? course.description.language : ""}</span>
          </div>
          <div className="InfomationCourse__dataIcon">
            <i className="fab fa-rocketchat"></i>
            <span>{course.description ? course.description.subtitle : ""}</span>
          </div>
        </div>
      {/* </div> */}
      {/* <div className="InfomationCourse__teacher"> */}
        <span className="title">Descripción del profesor</span>
        <div className="InfomationCourse__cardBorder">
          <div className="teacherCard">
            <img src={course.teacher ? course.teacher.photo : ""} alt="" />
            <div className="description">
              <span>{course.teacher ? course.teacher.name : ""}</span>
              <p>{course.teacher ? course.teacher.titulo : ""}</p>
            </div>
          </div>
          <div className="InfomationCourse__dataIcon">
            <i className="fa fa-star"></i>
            <span>Calificación del instructor: {course.teacher ? course.teacher.qualification : ""}</span>
          </div>
          <div className="InfomationCourse__dataIcon">
            <i className="fa fa-address-book"></i>
            <span>{course.teacher ? course.teacher.courses : ""} cursos</span>
          </div>
          <div className="InfomationCourse__dataIcon">
            <i className="fab fa-hotjar"></i>
            <span>{course.teacher ? course.teacher.reviews : ""} reseñas</span>
          </div>
          <div className="InfomationCourse__dataIcon">
            <i className="fa fa-users"></i>
            <span>{course.teacher ? course.teacher.students : ""} estudiantes</span>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default InfomationCourse;
