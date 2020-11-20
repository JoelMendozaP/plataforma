<<<<<<< HEAD
import React, { useEffect } from "react";
import Home from "./view/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Snackbar from "./components/Snackbar/Snackbar";
import Modal from "./view/Modal/Modal";
import "./assets/style/StyleGrid.css";
import { BrowserRouter, Route } from "react-router-dom";
import { useStateValue } from "./services/context/store";
import { obtenerUsuarioActual } from "./services/actions/UsuarioAction";

function App(props) {
  const [{ openSnackbar }, dispatch] = useStateValue();

  useEffect(() => {
    const idLs = window.localStorage.getItem("id");
    if (idLs) {
      obtenerUsuarioActual(idLs, dispatch)
        .then((response) => {
          console.log("Se inicio", response);
=======
import { Template } from "./components/layout";
import "./assets/style/globalStyle.css";
import Theme from "./components/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./translate/i18n";
import { useEffect } from "react";
import { obtenerUsuarioActual } from "./services/action/UserAuthAction";
import { startSession } from "./store/actions";
import { connect } from "react-redux";
const App = (props) => {
  useEffect(() => {
    const idLs = window.localStorage.getItem("id");
    if (idLs) {
      obtenerUsuarioActual(idLs)
        .then((response) => {
          console.log(response);
          props.startSession(response.data.userToReturn, true);
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
<<<<<<< HEAD
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="containerGrid">
        <BrowserRouter>
          <Route
            path="/"
            render={() => (
              <Home
                onChangeColor={props.onChangeColor}
                colorValue={props.colorValue}
              />
            )}
          />
          <Navbar />
          <Sidebar />
        </BrowserRouter>
      </div>
      <Snackbar
        open={openSnackbar ? openSnackbar.open : false}
        message={
          <span id="message-id">
            {openSnackbar ? openSnackbar.message : ""}
          </span>
        }
        onClose={() =>
          dispatch({
            type: "OPEN_SNACKBAR",
            openMensaje: { open: false, message: "" },
          })
        }
      />
      <Modal
        open={
          openSnackbar
            ? openSnackbar.modal.open
              ? openSnackbar.modal.open
              : false
            : false
        }
        content={
          openSnackbar
            ? openSnackbar.modal.content
              ? openSnackbar.modal.content
              : null
            : null
        }
      />
    </React.Fragment>
  );
}

export default App;
=======
  }, [props]);
  return (
    <I18nextProvider i18n={i18n}>
      <Theme>
        <Template />
      </Theme>
    </I18nextProvider>
  );
};

const mapDispatchToProps = {
  startSession,
};
export default connect(null, mapDispatchToProps)(App);
>>>>>>> 50b97f97b20f2b7792f87f8685c179aaf55e8fd5
