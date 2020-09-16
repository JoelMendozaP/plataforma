import "./Navbar.css";
import Search from "../inputs/Search";
import HeaderOptions from "../Buttons/HeaderOption";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [modalIsOpen, setModal] = useState(false);
  const { t } = useTranslation("header");

  const handleCloseModalSS = (e) => {
    setModal(!modalIsOpen);
  };

  return (
    <div className="itemnav navlist">
      <div className="navlist__title">
        <h1>{t("welcomeHead")}</h1>
      </div>
      <div className="navlist__search">
        <Search />
      </div>
      <div className="navlist__options">
        <HeaderOptions
          onCloseModal={handleCloseModalSS}
          modalIsOpen={modalIsOpen}
        />
      </div>
    </div>
  );
}

export default Navbar;
