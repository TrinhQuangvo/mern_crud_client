import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constant/actionTypes";
// state is represent for posts

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter((item) => item.id !== action.payload);
    case LIKE:
      return state.map((post) =>
        post.id === action.payload._id ? action.payload : post
      );
    default:
      return state;
  }
};
export default posts;
