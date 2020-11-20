import "./CourseInfo.css";
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import ListCard from "../../components/Card/ListCard";
import Loading from "../../components/animation/Loading";
import CardModule from "../../components/Card/CardModule";
import InfomationCourse from "../../components/Information/InfomationCourse"
import { useStateValue } from "../../services/context/store";
=======

import { Loading } from "../../components/animation";
import { InfomationCourse } from "../../components/layout/aside";
import { ListCard, CardModule } from "../../components/card";
import { connect } from "react-redux";
import { changeInfo } from "../../store/actions";
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
const datos = {
  id: 1,
  nombre: "SQL para el análisis de datos",
  price: "18,99 US$",
  realPrice: "129,99 US$",
  discount: "85",
  icons: { star: "5.0", time: "165", student: 151 },
  learn: [
    "Beginner level introduction to Docker",
    "Build Docker images using Dockerfiles with Hands-On Exercises",
    "Understand what Docker Swarm is",
    "Understand what Docker Compose is",
    "Build Application stack using Docker Compose Files with Hands-On Exercises",
    "Basic Docker Commands with Hands-On Exercises",
  ],
  managed: [
    "Si deseas obtener un trabajo en la industria de desarrollo web, con este curso aprenderás 7 tecnologías a la vez",
    "Aprender Desarrollo web es un proceso de mucha práctica, así que practicaremos bastante pero lo haremos de forma divertida y con proyectos reales",
    "Si eres una persona que aprende más elaborando proyectos del mundo real este curso es para ti",
  ],
  requirements: [
    "No tienes que tener experiencia previa ni con HTML5 o CSS3 para comenzar, sin embargo cualquier experiencia que tengas te ayudará bastante",
    "No es necesario tener experiencia en programación",
    "Instalaremos un editor de Texto y Servidor local, así que se recomienda tener acceso de administrador",
    "Este curso incluye el desarrollo de un sitio web completo que integrará HTML5, CSS3, JavaScript, jQuery, PHP y MySQL",
    "Aprenderás JavaScript y jQuery para añadir interactividad a tu sitio web.",
  ],
  contents: [
    {
      id: 1,
      name: "Modulo 1",
      lessons: [
        {
          id: 1,
          name: "Introduccion",
          description:
            "Aquí veras la presentación del profesor y del curso requisitos y demás.",
        },
        {
          id: 2,
          name: "Presentacion del curso",
          description:
            "Aquí veras la presentación del profesor y del curso requisitos y demás.",
        },
      ],
    },
    {
      id: 2,
      name: "Modulo 2",
      lessons: [
        {
          id: 1,
          name: "Curso 1",
          description:
            "Aquí veras la presentación del profesor y del curso requisitos y demás.",
        },
        {
          id: 2,
          name: "Curso 2",
          description:
            "Aquí veras la presentación del profesor y del curso requisitos y demás.",
        },
      ],
    },
    {
      id: 3,
      name: "Modulo 3",
      lessons: [
        {
          id: 1,
          name: "Curso 1",
          description:
            "Aquí veras la presentación del profesor y del curso requisitos y demás.",
        },
      ],
    },
    {
      id: 4,
      name: "Modulo 4",
      lessons: [],
    },
  ],
  description: {
<<<<<<< HEAD
    content: "Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previos, INCLUYE PROYECTO FINAL",
    certificate: true,
    level: "Curso Intermedio",
    language: "Español (Spanish)",
    subtitle: "Inglés (English)"
=======
    content:
      "Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previos, INCLUYE PROYECTO FINAL",
    certificate: true,
    level: "Curso Intermedio",
    language: "Español (Spanish)",
    subtitle: "Inglés (English)",
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
  },
  teacher: {
    name: "Gabriel Gabellone",
    titulo: "Regional Manager Planificación Comercial Cencosud",
    photo: "https://uifaces.co/our-content/donated/gPZwCbdS.jpg",
    qualification: "4.6",
    courses: "25",
    reviews: "47.285",
<<<<<<< HEAD
    students: "174.235"
  }
};
function CourseInfo(props) {
  const [curso, setCurso] = useState({});
  const [{ sesionUsuario }, dispatch] = useStateValue();
  useEffect(() => {
    setCurso(datos);
    if (curso) {
      dispatch({
        type: "CHANGE_INFO",
        data: <InfomationCourse course={curso} />,
      });
    }
  }, [curso, dispatch]);
=======
    students: "174.235",
  },
};

function CourseInfo(props) {
  const [curso, setCurso] = useState({});
  useEffect(() => {
    setCurso(datos);
    if (curso) {
      props.changeInfo(<InfomationCourse course={curso} />);
    }
  }, [curso, props]);
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
  const listModulo = () => {
    let list = [];
    if (curso) {
      if (curso.contents) {
        for (let i = 0; i < curso.contents.length; i++) {
          list.push(
            <CardModule key={i} lesson={curso.contents[i].lessons}>
              {curso.contents[i].name}
            </CardModule>
          );
        }
      }
      return list;
    } else {
      return Loading;
    }
  };
  return (
    <div className="CourseInfo">
      <div className="CourseInfo__header">
        <div className="CourseInfo__title">
          <h2>{curso.nombre}</h2>
<<<<<<< HEAD
          <i className="fas fa-bookmark"></i>
=======
          <i className="far fa-heart"></i>
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
        </div>
        <div className="CourseInfo__icons">
          <div className="CourseInfo__icon">
            <i className="fas fa-star"></i>
            <span>{curso.icons ? curso.icons.star : ""}</span>
          </div>
          <div className="CourseInfo__icon">
            <i className="fas fa-clock"></i>
            <span>{curso.icons ? curso.icons.time : ""} minutos</span>
          </div>
          <div className="CourseInfo__icon">
            <i className="fas fa-user-friends"></i>
            <span>{curso.icons ? curso.icons.student : ""} estudiantes</span>
          </div>
        </div>
      </div>
      <div className="CourseInfo__information">
        <ListCard list={curso.learn}>Lo que aprenderás</ListCard>
        <ListCard list={curso.managed}>¿Para quien es este curso?</ListCard>
        <ListCard list={curso.requirements}>Requisitos</ListCard>
      </div>
      <div className="CourseInfo__Content">
        <h3>Contenido del curso</h3>
        {listModulo()}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default CourseInfo;
=======
const mapDispatchToProps = {
  changeInfo,
};
export default connect(null, mapDispatchToProps)(CourseInfo);
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
