import React from "react";
import Home from "./view/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Snackbar from "./components/Snackbar/Snackbar";
import "./assets/style/StyleGrid.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useStateValue } from "./services/context/store";

function App(props) {
  const [{ openSnackbar }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <div className="containerGrid">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Home
                  onChangeColor={props.onChangeColor}
                  colorValue={props.colorValue}
                />
              )}
            />
          </Switch>
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
    </React.Fragment>
  );
}

export default App;
