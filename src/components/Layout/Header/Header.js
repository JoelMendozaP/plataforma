import React, { Component } from 'react'
import Classes from './Header.module.css'

class Header extends Component {
  state = {
  }
  render() {

    return (
      <div className={Classes.Header}>
        <img alt="..." src={require("../../../assets/img/capacitalogo.jpeg")}></img>
        <div className={Classes.dropdown}>
          <button className={Classes.dropbtn}>Categorías</button>
          <div className={Classes.dropdownContent}>
            <a href="...">Categoría 1</a>
            <a href="...">Categoría 2</a>
            <a href="...">Categoría 3</a>
          </div>
        </div> 
        <input type="text"></input>
        <button className={Classes.btn}>Mis cursos</button>
        <button className={Classes.btn}>Intereses</button>
        <button className={Classes.btn}>Ingresar</button>
      </div>
    )
  }
}

export default Header