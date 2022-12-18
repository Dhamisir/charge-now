import {
  SERVICE_FAILURE,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SINGLE_REQUEST,
} from "./services.types";

const initialState = {
  isLoading: false,
  isError: false,
  serviceData: [],
  singleData: {},
};

export const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SERVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SERVICE_SUCCESS: {
      return {
        ...state,
        serviceData: payload.softwares,
        isLoading: false,
        isError: false,
      };
    }
    case SERVICE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case SINGLE_REQUEST: {
      return { ...state, singleData: payload.service };
    }
    default: {
      return state;
    }
  }
};
