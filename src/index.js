<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Theme from "./assets/style/Theme";
import i18n from "./translate/i18n";
import { I18nextProvider } from "react-i18next";
import { initialState } from "./services/context/initialState";
import { StateProvider } from "./services/context/store";
import { mainReducer } from "./services/context/reducer/index";
const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <I18nextProvider i18n={i18n}>
        <Theme />
      </I18nextProvider>
    </StateProvider>
  </React.StrictMode>,
=======
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers";
const initialState = {
  sesionUser: {
    user: {},
    authenticate: false,
  },
  snackbarReducer: {
    open: false,
    message: "",
  },
  informationComponent: null,
};
const store = createStore(reducer, initialState);
const container = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
  container
);
