import React from "react";
import "./Sidebar.css";
import logo1 from "../../assets/img/logo1.png";
import logo from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Sidebar() {
  const { t } = useTranslation("sidebarT");
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
            <span className="nav__linkText">{t("sidInicio")}</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/Courses" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-chalkboard-teacher"></i>
            </span>
            <span className="nav__linkText">{t("sidCursos")}</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/Calendar" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-calendar-day"></i>
            </span>
            <span className="nav__linkText">{t("sidCalendario")}</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/Account" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-user-circle"></i>
            </span>
            <span className="nav__linkText">{t("sidCuenta")}</span>
          </Link>
        </li>

        <li className="nav__item">
          <Link to="/questions" className="nav__link">
            <span className="nav__linkIcon">
              <i className="fas fa-question-circle"></i>
            </span>
            <span className="nav__linkText">{t("sidPreguntas")}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
