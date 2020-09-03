import "./Navbar.css";
import Search from "../inputs/Search";
import HeaderOptions from "../Buttons/HeaderOption";
import React, { Component } from "react";

class Navbar extends Component {
  state = {
    modalIsOpen: false,
  };
  handleCloseModalSS = (e) => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <div className="itemnav navlist">
        <div className="navlist__title">
          <h1>Bienvenido</h1>
        </div>
        <div className="navlist__search">
          <Search />
        </div>
        <div className="navlist__options">
          <HeaderOptions
            onCloseModal={this.handleCloseModalSS}
            modalIsOpen={this.state.modalIsOpen}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
