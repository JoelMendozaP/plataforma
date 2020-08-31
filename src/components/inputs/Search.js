import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="buscar-caja">
          <a className="buscar-btn" href="/">
            <i className="fas fa-search"></i>
          </a>
          <input
            type="text"
            name=""
            className="buscar-txt"
            placeholder="Buscar..."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
