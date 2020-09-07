import React from "react";
import { Component } from "react";
import { registerUser } from "../../services/actions/UsuarioAction";
import "./Register.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { username, email, password } = this.state;
    registerUser({
      username: username,
      email: email,
      password: password,
    })
      .then((response) => {
        // if (response.data.logged_in) {
        //   this.props.handleSuccessfulAuth(response.data);
        // }
        console.log("se registro exitosamente", response.data);
        window.localStorage.setItem("token_seguridad", response.data.token);
      })
      .catch((error) => {
        console.error("registration error", error);
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
      <form onSubmit={this.handleSubmit}>
        <div className="form__Input">
          <input
            className="formControl"
            type="text"
            name="username"
            placeholder="Usuario"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <i class="fas fa-user"></i>
        </div>
        <div className="form__Input">
          <input
            className="formControl"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <i class="fas fa-envelope"></i>
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
        <div className="form__Input">
          <input
            className="formControl"
            type="password"
            name="password_confirmation"
            placeholder="Confirmar contraseña"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
          <i class="fas fa-lock"></i>
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
    );
  }
}

export default Register;
