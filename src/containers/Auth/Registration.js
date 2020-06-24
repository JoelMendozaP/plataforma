import React, { Component } from 'react'
import axios from 'axios'

import ScreenCenter from '../../components/Layout/ScreenCenter/ScreenCenter'
import './Login.css'
import Classes from '../../components/Layout/Header/Header.module.css'

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      name: "",
      last_name: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const {
      username,
      email,
      name,
      last_name,
      password
    } = this.state;
    axios.post("http://localhost:5000/api/auth/register", {
      username: username,
      email: email,
      name: name,
      last_name: last_name,
      password: password
    }, {
      withCredentials: true
    }
    ).then(response => {
      if (response.data.logged_in) {
        this.props.handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.error("registration error", error);

    })
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <ScreenCenter>
        <h2>REGISTRO</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='formInput'>
            <label className='formLabel'>Usuario</label>
            <input
              className='formControl'
              type="text"
              name="username"
              placeholder="Usuario"
              value={this.state.username}
              onChange={this.handleChange}
              required />
          </div>
          <div className='formInput'>
            <label className='formLabel'>Nombres</label>
            <input
              className='formControl'
              type="text"
              name="names"
              placeholder="Nombres"
              value={this.state.names}
              onChange={this.handleChange}
              required />
          </div>
          <div className='formInput'>
            <label className='formLabel'>Apellido</label>
            <input
              className='formControl'
              type="text"
              name="last_names"
              placeholder="Apellido"
              value={this.state.last_names}
              onChange={this.handleChange}
              required />
          </div>
          <div className='formInput'>
            <label className='formLabel'>Correo electrónico</label>
            <input
              className='formControl'
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={this.state.email}
              onChange={this.handleChange}
              required />
          </div>
          <div className='formInput'>
            <label className='formLabel'>Contraseña</label>
            <input
              className='formControl'
              type="password"
              name="password"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.handleChange}
              required />
          </div>
          <div className='formInput'>
            <label className='formLabel'>Confirmar contraseña</label>
            <input
              className='formControl'
              type="password"
              name="password_confirmation"
              placeholder="Confirmar contraseña"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required />
          </div>
          <button className={Classes.btn} type="submit">Crear cuenta</button>
        </form>
      </ScreenCenter>
    )
  }
}
