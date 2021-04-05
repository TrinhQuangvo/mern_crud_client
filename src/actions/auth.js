import * as api from "./../api";
import { AUTH } from "../constant/actionTypes";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: AUTH, data }); 
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
