import { combineReducers } from "redux";

import authReducer from "./auth";
import posts from "./posts";
import uiReducer from "./ui.reducer";

export default combineReducers({
  posts,
  authReducer,
  uiReducer,
});
