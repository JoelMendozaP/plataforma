import Category from "../../../components/Information/Category";
import React from "react";
const initialState = {
  information: <Category />,
};
const informationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INFO":
      return {
        ...state,
        information: action.data,
      };

    default:
      return state;
  }
};

export default informationReducer;
