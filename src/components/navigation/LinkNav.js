import React from "react";
import { Link } from "react-router-dom";
const LinkNav = (props) => {
  const { to, icon, children } = props;
  return (
    <Link to={to} className="nav__link">
      <span className="nav__linkIcon">
        <i className={`fas fa-${icon}`}></i>
      </span>
      <span className="nav__linkText">{children}</span>
    </Link>
  );
};

export default LinkNav;
