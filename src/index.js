import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Theme from "./assets/style/Theme";
import i18n from "./translate/i18n";
import { I18nextProvider } from "react-i18next";

const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Theme />
    </I18nextProvider>
  </React.StrictMode>,
  container
);
