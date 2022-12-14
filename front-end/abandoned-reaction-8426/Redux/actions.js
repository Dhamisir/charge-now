import axios from 'axios'
import {
  logout,
  loginFail,
  loginSucc,
  signupSucc,
  signupFail,
  signupLoad,
} from "./actionTypes";
const HandleSignup = (creds) => async (dispatch) => {
dispatch({
    type:signupLoad,
})

    try {
        const url=Process.env.SIGNUP_API
      const res=await axios.post(url,creds);
    dispatch({
        type:signupSucc,
        payload:res.data,
    })  
    return res.data
  } catch (error) {
    dispatch({
        type:signupFail
    })
  }



};




const HandleLogin = (creds) => async (dispatch) => {
  try {

  } catch (error) {
    return dispatch({
      type: loginFail,
      payload: "Login Failed",
    });
  }
};

const HandleLogout = () => {
  return {
    type: logout,
  };
};

export { HandleLogin, HandleLogout ,HandleSignup};
