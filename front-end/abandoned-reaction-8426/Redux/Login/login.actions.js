import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  AddServiceEmail,
  DelServiceEmail
} from "./login.types";
export const HandleLogin = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      "http://localhost:8080/chargebee/user/login",
      creds
    );
    const data = await res.data;
    return dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    return dispatch({
      type: LOGIN_ERROR,
      payload: error.message,
    });
  }
};

export const AddEmail = (newEmail) => {
  return {
    type: AddServiceEmail,
    payload: newEmail,
  };
};

export const DelEmail = (newEmail) => {
  return {
    type: DelServiceEmail,
    payload: newEmail,
  };
};
export const HandleLogout = () => ({
  type: LOGOUT,
});
