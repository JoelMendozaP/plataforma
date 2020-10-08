const initialState = {
  open: false,
  message: "",
  modal: {
    open: false,
    content: null,
  },
};

const openSnackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SNACKBAR":
      return {
        ...state,
        open: action.openMensaje.open,
        message: action.openMensaje.message,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: {
          open: action.open,
          content: action.content,
        },
      };
    default:
      return state;
  }
};

export default openSnackbarReducer;
