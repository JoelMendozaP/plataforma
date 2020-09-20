export const initialState = {
  usuario: {
    id: "",
    username: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    dateN: "",
    gender: "",
    direction: "",
    postalCode: "",
    photoUrl:
      "http://res.cloudinary.com/dzxmzxvbr/image/upload/v1600562164/efy753hepqannfxshyag.png",
  },
  autenticado: false,
};

const sesionUsuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        ...state,
        usuario: action.sesion,
        autenticado: action.autenticado,
      };
    case "SALIR_SESION":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado,
      };
    case "ACTUALIZAR_USUARIO":
      return {
        ...state,
        usuario: action.nuevoUsuario,
        autenticado: action.autenticado,
      };

    default:
      return state;
  }
};

export default sesionUsuarioReducer;
