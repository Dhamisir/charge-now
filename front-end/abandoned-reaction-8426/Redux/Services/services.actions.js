import axios from "axios";
import {
  SERVICE_FAILURE,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
} from "./services.types";
export const serviceAction = () => async (dispatch) => {
  dispatch({ type: SERVICE_REQUEST });
  try {
    const res = await axios.get(
      "http://localhost:8080/chargebee/software/getSoftware"
    );
    const data = await res.data;
    console.log(data);
    dispatch({ type: SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_FAILURE });
  }
};
