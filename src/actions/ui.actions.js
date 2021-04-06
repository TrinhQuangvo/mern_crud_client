import * as Action from "../constant/actionTypes";

export const DarkMode = (dispatch) => {
  return {
    type: Action.DARK_MODE,
    payload: dispatch,
  };
};
