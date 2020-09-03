import React from "react";
import "./Sidebar.css";
import logo1 from "../../assets/img/logo1.png";
import logo from "../../assets/img/logo.png";
function sidebar(props) {
  return (
    <nav className="itemSidebar navbar">
      <ul className="navbar__nav">
        <li className="nav__logo">
          <a href="/" className="nav__link">
            <span className="nav__linkText logo-text">
              <img src={logo} alt="" />
            </span>
            <span className="nav__linkIcon">
              <img src={logo1} alt="" />
            </span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-home"></i>
            </span>
            <span className="nav__linkText">Inicio</span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-chalkboard-teacher"></i>
            </span>
            <span className="nav__linkText">Cursos</span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-calendar-day"></i>
            </span>
            <span className="nav__linkText">Calendario</span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-user-circle"></i>
            </span>
            <span className="nav__linkText">Cuenta</span>
          </a>
        </li>

        <li className="nav__item">
          <a href="/" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-question-circle"></i>
            </span>
            <span className="nav__linkText">Preguntas</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default sidebar;
