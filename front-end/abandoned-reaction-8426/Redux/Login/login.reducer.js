import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  AddServiceEmail,
  DelServiceEmail
} from "./login.types";

let initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  user:{},
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        isLoading: true,
        isError:false,
      };
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
        isError: true,
        isLoading:false,
        errorMessage:payload,
      };
    }
    case LOGOUT: {
        return {
          ...state,
          isAuth:false
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
    default: {
      return {
        ...state,
      };
    }
  }
};


