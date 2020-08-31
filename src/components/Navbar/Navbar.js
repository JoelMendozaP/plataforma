import React from "react";
import "./Navbar.css";
import Search from "../inputs/Search";
import ListOption from "../Buttons/HeaderOption";
function navbar(props) {
  return (
    <div className="itemnav">
      <div className="navlist">
        <div className="itemlistTitle">
          <h1>Bienvenido</h1>
        </div>
        <div className="itemlistInput">
          <Search />
        </div>
        <div className="itemlistIcons">
          <ListOption />
        </div>
      </div>
    </div>
  );
}

export default navbar;
