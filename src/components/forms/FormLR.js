import React, { Component } from "react";
import Facebook from "../Buttons/Facebook";
import Google from "../Buttons/Google";
import Login from "./Login";
import Recover from "./Recover";
import Register from "./Register";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./FormLR.css";
class FormLR extends Component {
  render() {
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
              Iniciar Sesion
            </NavLink>
            <span className="LoginForm__titleSpan"> / </span>
            <NavLink
              exact
              to="/auth/register"
              className="title__option"
              activeClassName="LoginForm__titleAc"
            >
              Registro
            </NavLink>
          </div>
          <div className="LoginForm__form">
            <Switch>
              <Route
                path="/auth/register"
                render={() => (
                  <Register
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                  />
                )}
              />
              <Route
                path="/auth/login"
                render={() => (
                  <Login
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                  />
                )}
              />
              <Route
                path="/auth/recover"
                render={() => (
                  <Recover
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                  />
                )}
              />
            </Switch>
          </div>
          <div className="LoginForm__fg">
            <span className="form__span">Iniciar Sesion Usando:</span>
            <Facebook />
            <Google />
          </div>
          <div className="LoginForm__change">No tienes cuenta Registrate</div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default FormLR;
