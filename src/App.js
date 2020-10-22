import React, { useEffect } from "react";
import Home from "./view/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Snackbar from "./components/Snackbar/Snackbar";
import Modal from "./view/Modal/Modal";
import "./assets/style/StyleGrid.css";
import { Router, Route } from "react-router-dom";
import { useStateValue } from "./services/context/store";
import { obtenerUsuarioActual } from "./services/actions/UsuarioAction";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

function App(props) {
  const [{ openSnackbar }, dispatch] = useStateValue();
  const history = createBrowserHistory();
  ReactGA.initialize("G-4QNPFMH62Q");
  history.listen(function (location) {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
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
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="containerGrid">
        <Route history={history}>
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
        </Route>
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
