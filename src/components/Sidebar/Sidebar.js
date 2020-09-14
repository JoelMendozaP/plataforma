import React from "react";
import "./Sidebar.css";
import logo1 from "../../assets/img/logo1.png";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
function sidebar(props) {
  return (
    <nav className="itemSidebar navbar">
      <ul className="navbar__nav">
        <li className="nav__logo">
          <Link to="/" className="nav__link">
            <span className="nav__linkText logo-text">
              <img src={logo} alt="" />
            </span>
            <span className="nav__linkIcon">
              <img src={logo1} alt="" />
            </span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-home"></i>
            </span>
            <span className="nav__linkText">Inicio</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/Courses" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-chalkboard-teacher"></i>
            </span>
            <span className="nav__linkText">Cursos</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/Calendar" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-calendar-day"></i>
            </span>
            <span className="nav__linkText">Calendario</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/Account" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-user-circle"></i>
            </span>
            <span className="nav__linkText">Cuenta</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/questions" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-question-circle"></i>
            </span>
            <span className="nav__linkText">Preguntas</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default sidebar;
