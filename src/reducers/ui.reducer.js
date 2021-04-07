import { DARK_MODE } from "./../constant/actionTypes";

const uiReducer = (state = [], action) => {
  switch (action.type) {
    case DARK_MODE:
      localStorage.setItem("darkmode", JSON.stringify({ ...action.payload }));
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

export default uiReducer;
