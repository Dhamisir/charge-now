import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./register.types";
const initialState = {
  isRegistered: false,
  isLoading: false,
  isError: false,
};

export const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
        successMessage: payload,
        isLoading: false,
        isError: false,
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    }
    default: {
      return state;
    }
  }
};
