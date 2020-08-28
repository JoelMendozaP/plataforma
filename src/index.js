import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Theme from "./assets/style/Theme";

// const container = document.getElementById("root");
// ReactDOM.render(<Theme />, container);

import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import Translate from "./Translate";

const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Translate />
    </I18nextProvider>
  </React.StrictMode>,
  container
);
