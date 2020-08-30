import React from "react";
import "./Sidebar.css";
import logo1 from "../../assets/img/logo1.png";
import logo from "../../assets/img/logo.png";
function sidebar(props) {
  return (
    <div className="itemSidebar">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="/" className="nav-link">
              <span className="link-text logo-text">
                <img src={logo} alt="" />
              </span>
              <span className="icon">
                <img src={logo1} alt="" />
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
              <span className="link-text">Inicio</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="icon">
                <i className="fas fa-chalkboard-teacher"></i>
              </span>
              <span className="link-text">Cursos</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="icon">
                <i className="fas fa-calendar-day"></i>
              </span>
              <span className="link-text">Calendario</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="icon">
                <i className="fas fa-user-circle"></i>
              </span>
              <span className="link-text">Cuenta</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/" className="nav-link">
              <span className="icon">
                <i className="fas fa-question-circle"></i>
              </span>
              <span className="link-text">Preguntas</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default sidebar;
