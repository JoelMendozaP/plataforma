import sesionUsuarioReducer from "./sesionUsuarioReducer";
import openSnackbarReducer from "./openSnackbarReducer";
import informationReducer from "./informationReducer";
export const mainReducer = (
  { sesionUsuario, openSnackbar, informationR },
  action
) => {
  return {
    sesionUsuario: sesionUsuarioReducer(sesionUsuario, action),
    openSnackbar: openSnackbarReducer(openSnackbar, action),
    informationR: informationReducer(informationR, action),
  };
};
