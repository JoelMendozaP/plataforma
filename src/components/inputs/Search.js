import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="searchContainer">
          <a className="searchContainer__icon" href="/">
            <i className="fas fa-search"></i>
          </a>
          <input
            type="text"
            name=""
            className="searchContainer__input"
            placeholder="Buscar..."
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
