import React from "react";
import "./style/Sidebar.css";
import logo1 from "../../assets/img/logo1.png";
import logo from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LinkNav } from "./index";

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
          <LinkNav to="/" icon="home">
            {t("sidInicio")}
          </LinkNav>
        </li>

        <li className="nav__item">
          <LinkNav to="/courses" icon="chalkboard-teacher">
            {t("sidCursos")}
          </LinkNav>
        </li>

        <li className="nav__item">
          <LinkNav to="/calendar" icon="calendar-day">
            {t("sidCalendario")}
          </LinkNav>
        </li>

        <li className="nav__item">
          <LinkNav to="/account" icon="user-circle">
            {t("sidCuenta")}
          </LinkNav>
        </li>

        <li className="nav__item">
          <LinkNav to="/questions" icon="question-circle">
            {t("sidPreguntas")}
          </LinkNav>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
