import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "./login.types";
let initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
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
        token:payload,
        isLoading: false,
        isError:false,

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
       isAuth:false,
       token:''
          
        };
      }
    
    default: {
      return {
        ...state,
      };
    }
  }
};


