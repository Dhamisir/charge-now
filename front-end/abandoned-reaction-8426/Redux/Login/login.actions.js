import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "./login.types";
export const HandleLogin = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  console.log(creds)
  try {
    // const urlh=Process.env.API;
    const res = await axios.post(
      "https://reqres.in/api/login",
      creds
    );
    const data = await res.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
   return dispatch({
      type: LOGIN_ERROR,
      payload: error.message,
    });
  }
};

export const HandleLogout = () => {
  return {
    type: LOGOUT,
  };
};
