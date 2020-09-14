const initialState = {
  information: null,
};
const informationReducer = (state = initialState, action) => {
  return {
    ...state,
    information: action.data,
  };
};

export default informationReducer;
