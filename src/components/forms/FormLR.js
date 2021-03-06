import Facebook from "../Buttons/Facebook";
import Google from "../Buttons/Google";
import Login from "./Login";
import Recover from "./Recover";
import Register from "./Register";
import "./style/FormLR.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

function FormLR(props) {
  const { t } = useTranslation("formLR");
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default FormLR;
