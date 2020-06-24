import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import browserHistory from "react-router"

import Classes from './Header.module.css'

class Header extends Component {
  state = {
  }

  onNavigateHome() {
    // Route.push("/home");
  }

  render() {
    return (
      <div className={Classes.Header}>
        <img className={Classes.Logo} alt="..." src={require("../../../assets/img/capacitalogo.png")}></img>
        <div className={Classes.dropdown}>
          <button className={Classes.dropbtn}>Categorías</button>
          <div className={Classes.dropdownContent}>
            <a href="...">Categoría 1</a>
            <a href="...">Categoría 2</a>
            <a href="...">Categoría 3</a>
          </div>
        </div>
        <input className={Classes.formControl} type="text"></input>
        <button className={Classes.btn}>Mis cursos</button>
        <Link to={"/sign-up"}>
          <button className={Classes.btn}>Registrarse</button>
        </Link>
        <Link to={"/sign-in"}>
          <button className={Classes.btn}>Iniciar sesión</button>
        </Link>
      </div>
    )
  }
}

export default Header