import "./Navbar.css";
import Search from "../inputs/Search";
import HeaderOptions from "../Buttons/HeaderOption";
import React from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation("header");
  return (
    <div className="itemnav navlist">
      <div className="navlist__title">
        <h1>{t("welcomeHead")}</h1>
      </div>
      <div className="navlist__search">
        <Search />
      </div>
      <div className="navlist__options">
        <HeaderOptions />
      </div>
    </div>
  );
}

export default Navbar;
