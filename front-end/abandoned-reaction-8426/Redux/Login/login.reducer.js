import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  AddServiceEmail,
  DelServiceEmail,
  SEND_OTP,
  CHECK_OTP,
  UpdateUser
} from "./login.types";

let initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  user:{},
  otp:'',
  isOtp:false,
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        isLoading: true,
        isError:false,
      };
    }
    case UpdateUser:{
      return {
        ...state,
        user:{...payload}
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth:true,
        isLoading: false,
        isError:false,
        user:payload
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isAuth:false,
        isError: true,
        isLoading:false,
        errorMessage:payload,
      };
    }
    case LOGOUT: {
        return {
          ...initState
        };
      }
    case AddServiceEmail:{
      return {
        ...state, 
        user:{
          ...state.user,
          serviceEmail:payload
        }
      }
    }
    case DelServiceEmail:{
      return {
        ...state, 
        user:{
          ...state.user,
          serviceEmail:payload
        }
      }
    }
    case SEND_OTP:{
      return{
...state,
otp:payload,
isOtp:true,
      }
    }
    case CHECK_OTP:{
      return{
...state,

      }
    }
    default: {
      return {
        ...state,
      };
    }
  }
};


