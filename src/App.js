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
import ReactGA from "react-ga";

ReactGA.initialize("G-4QNPFMH62Q");

function App(props) {
  const [{ openSnackbar }, dispatch] = useStateValue();

  useEffect(() => {
    const idLs = window.localStorage.getItem("id");
    if (idLs) {
      obtenerUsuarioActual(idLs, dispatch)
        .then((response) => {
          console.log("Se inicio", response);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
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
