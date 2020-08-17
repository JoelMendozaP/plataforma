import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import browserHistory from "react-router"

import Classes from './Header.module.css'
import Button from '../../Buttons/NormalButton'

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
        <Button>Mis cursos</Button>
        <Link to={"/sign-up"}>
          <Button>Registrarse</Button>
        </Link>
        <Link to={"/sign-in"}>
          <Button>Iniciar sesión</Button>
        </Link>
      </div>
    )
  }
}

export default Header