import axios from "axios";
import {
  LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_ERROR,  
LOGOUT       
} from "./login.types";
export const HandleLogin = (creds) => async (dispatch) => {
 dispatch({type: LOGIN_REQUEST})
  try {
// const urlh=Process.env.API;
const res=await axios.post(`http://localhost:8080/chargebee/user/login`,creds);
dispatch({
  type:LOGIN_SUCCESS,
  payload:res.data,
})
return res.data;

  } catch (error) {
    return dispatch({
      type: LOGIN_ERROR,
      payload:error.message,
    });
  }
};

export const HandleLogout = () => {
  return {
    type: LOGOUT       
    ,
  };
};

