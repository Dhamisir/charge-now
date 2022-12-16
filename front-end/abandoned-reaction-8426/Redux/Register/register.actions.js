import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./register.types";
export const registerUser = (creds) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  // const API = process.env.API;
  console.log(creds);
  try {
    const res = await axios.post(
      "http://localhost:8080/chargebee/user/register",
      creds
    );
    const data = await res.data;
    console.log(data);
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.message });
  }
};
