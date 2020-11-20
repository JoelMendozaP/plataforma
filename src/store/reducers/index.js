const reducer = (state, action) => {
  switch (action.type) {
    // Snackbar
    case "OPEN_SNACKBAR":
      return {
        ...state,
        snackbarReducer: {
          open: action.status,
          message: action.content,
        },
      };
    case "CHANGE_INFO":
      return {
        ...state,
        informationComponent: action.data,
      };
    // UsuarioAuth
    case "START_SESSION":
      return {
        ...state,
        sesionUser: {
          ...state.sesionUser,
          user: action.user,
          authenticate: action.status,
        },
      };
    case "CLOSE_SESSION":
      return {
        ...state,
        sesionUser: {
          ...state.sesionUser,
          user: {},
          authenticate: false,
        },
      };
    case "UPDATE_USER":
      return {
        ...state,
        sesionUser: {
          ...state.sesionUser,
          user: action.user,
        },
      };
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        sesionUser: {
          ...state.sesionUser,
          user: {
            ...state.sesionUser.user,
            language: action.newLang,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
