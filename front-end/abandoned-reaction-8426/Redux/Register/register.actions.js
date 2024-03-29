import axios from "axios";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./register.types";
let API = process.env.NEXT_PUBLIC_API_LINK;
export const registerUser = (creds) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  console.log(creds);
  try {
    const res = await axios.post(
      `${API}/chargebee/user/register`,
      creds
    );
    const data = await res.data;
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_ERROR, payload: error.message });
  }
};
