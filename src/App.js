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
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
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
