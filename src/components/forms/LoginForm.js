import React, { Component } from "react";
import { loginUsuario } from "../../services/actions/UsuarioAction";
import "./LoginForm.css";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UsernameOrEmail: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { UsernameOrEmail, password } = this.state;
    loginUsuario({
      UsernameOrEmail: UsernameOrEmail,
      password: password,
    })
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
        console.log("exito", response.data);
        console.log("logged", response.data.logged_in);
        window.localStorage.setItem("token_seguridad", response.data.token);
      })
      .catch((error) => {
        console.error("login error", error);
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form__Input">
            <input
              className="formControl"
              type="text"
              name="UsernameOrEmail"
              placeholder="Usuario o correo"
              value={this.state.UsernameOrEmail}
              onChange={this.handleChange}
              required
            />
            <i class="fas fa-user"></i>
          </div>
          <div className="form__Input">
            <input
              className="formControl"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <i class="fas fa-lock"></i>
          </div>
          <button type="submit">Ingresar</button>
          <p className="forgotPassword">
            ¿Olvidaste tu <a href="...">contraseña?</a>
          </p>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
