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
  container
);
