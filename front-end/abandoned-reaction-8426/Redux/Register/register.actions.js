import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./register.types";
export const registerUser = (creds) => async (dispatch) => {
  dispatch({ REGISTER_REQUEST });
  const API = process.env.SIGNUP_API;
  try {
    const res = await axios.post(API, creds);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.message });
  }
};
