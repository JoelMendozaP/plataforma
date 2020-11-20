import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Google } from "../buttons";
import { Login, Register, Recover } from "../form";
import "./style/ModalLog.css";
const ModalLog = () => {
  const { t } = useTranslation("formLR");
  return (
    <React.Fragment>
      <div className="LoginForm__title">
        <NavLink
          exact
          to="/auth/login"
          className="title__option"
          activeClassName="LoginForm__titleAc"
        >
          {t("lrIniciar")}
        </NavLink>
        <span className="LoginForm__titleSpan"> / </span>
        <NavLink
          exact
          to="/auth/register"
          className="title__option"
          activeClassName="LoginForm__titleAc"
        >
          {t("lrRegistro")}
        </NavLink>
      </div>
      <div className="LoginForm__form">
        <Switch>
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/recover" component={Recover} />
        </Switch>
      </div>
      <div className="LoginForm__fg">
        <span className="form__span">{t("lrRegistro")}:</span>
        <Facebook />
        <Google />
      </div>
      <div className="LoginForm__change"></div>
    </React.Fragment>
  );
};

export default ModalLog;
