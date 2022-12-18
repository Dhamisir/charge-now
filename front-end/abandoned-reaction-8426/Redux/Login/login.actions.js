import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  AddServiceEmail,
  DelServiceEmail,
  UpdateUser
} from "./login.types";
let API = process.env.NEXT_PUBLIC_API_LINK;
console.log(API)
export const HandleLogin = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      `${API}/chargebee/user/login`,
      creds
    );
    const data = await res.data;
    localStorage.setItem('token', data.token)
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

export const UserUpdater = (user)=>{
  console.log(user)
  return {
    type:UpdateUser,
    payload:user
  }
}

export const HandleTokenLogin = () => async (dispatch) => {
  let token = localStorage.getItem('token')
  try {
    let res = await axios.get(`http://localhost:8080/chargebee/user/verifytoken/${token}`)
    let data = await res.data

    if(!data.error){
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: data.user,
      })
    } else {
      return dispatch({
        type: LOGIN_ERROR,
        payload: data.msg,
      })
    }
  } catch (error) {
    return dispatch({
      type: LOGIN_ERROR,
      payload: error.message,
    });
  }
}

export const DelEmail = (newEmail) => {
  return {
    type: DelServiceEmail,
    payload: newEmail,
  };
};
export const HandleLogout = () => {
  localStorage.removeItem('token')
  return {
    type:LOGOUT
  }
};
