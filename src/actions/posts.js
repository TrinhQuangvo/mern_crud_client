import * as api from "./../api";
import * as Action from "../constant/actionTypes";

// action creators
export const getPosts = async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: Action.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: Action.CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: Action.UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: Action.DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  // id is a id get via UI's click
  const user = JSON.parse(localStorage.getItem("profile")); 

  try {
    // return a promise included "data" inside
    const { data } = await api.likePost(id, user?.token);
    dispatch({ type: Action.LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
