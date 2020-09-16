import React from "react";
import { useTranslation } from "react-i18next";
import "./Search.css";
function Search() {
  const { t } = useTranslation("header");
  return (
    <React.Fragment>
      <div className="searchContainer">
        <a className="searchContainer__icon" href="/">
          <i className="fas fa-search"></i>
        </a>
        <input
          type="text"
          name=""
          className="searchContainer__input"
          placeholder={t("searchHead")}
        />
      </div>
    </React.Fragment>
  );
}

export default Search;
