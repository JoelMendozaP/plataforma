import React, { useState } from "react";
import ThemeStyle from "./ThemeStyle";
const Theme = (props) => {
  const [theme, setTheme] = useState({
    color1: "#23232e",
    color2: "#405267",
    color3: "#723489",
    color4: "#F509B4",
    color5: "#fa98de",
    color6: "#ffffff",
    color7: "#d57272",
    color8: "#60bb6f",
    fondo1: "#fff",
    fondo2: "#fff",
  });
  const onChangeHeader = (e) => {
    const { value, name } = e.target;
    setTheme((a) => ({
      ...a,
      [name]: value,
    }));
  };
  return (
    <React.Fragment>
      <ThemeStyle color={theme} onChange={onChangeHeader} />
      {props.children}
    </React.Fragment>
  );
};

export default Theme;
