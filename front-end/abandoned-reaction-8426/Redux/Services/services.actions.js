import axios from "axios";
import {
  SERVICE_FAILURE,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SINGLE_REQUEST,
} from "./services.types";
let API = process.env.NEXT_PUBLIC_API_LINK;
export const serviceAction = () => async (dispatch) => {
  dispatch({ type: SERVICE_REQUEST });
  try {
    const res = await axios.get(`${API}/chargebee/software/getSoftware`);
    const data = await res.data;
    console.log(data);
    dispatch({ type: SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_FAILURE });
  }
};

export const singleAction = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API}/chargebee/software/getSingleSoftware/${id}`
    );
    const data = await res.data;
    console.log(data);
    dispatch({ type: SINGLE_REQUEST, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_FAILURE });
  }
};
