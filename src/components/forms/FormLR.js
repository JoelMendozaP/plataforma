import React, { Component } from "react";
import Facebook from "../Buttons/Facebook";
import Google from "../Buttons/Google";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class FormLR extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="LoginForm__title">
            <Link to="/auth/login">Iniciar Sesion</Link>/
            <Link to="/auth/register">Registro</Link>
          </div>
          <div className="LoginForm__form">
            <p>Iniciar Sesion</p>
            <Switch>
              <Route path="/auth/register" component={Register} />
              <Route path="/auth/login" component={Login} />
            </Switch>
          </div>
          <div className="LoginForm__fg">
            <p>Iniciar Sesion Usando:</p>
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
