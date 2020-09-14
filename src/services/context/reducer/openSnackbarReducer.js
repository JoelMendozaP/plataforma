const initialState = {
  open: false,
  message: "",
};

const openSnackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SNACKBAR":
      return {
        ...state,
        open: action.openMensaje.open,
        message: action.openMensaje.message,
      };

    default:
      return state;
  }
};

export default openSnackbarReducer;
