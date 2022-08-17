import axios from "axios";
import {
  FAIL,
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../ActionTypes/auhTypes";
// import { alert_errors } from "./alertAction";
export const register = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/users/register", data);
    dispatch({ type: REGISTER, payload: res.data });
  } catch (error) {
    // error.response.data.errors.forEach((el) => {
    //   dispatch(alert_errors(el.msg));
    // });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/users/login", data);
    dispatch({ type: LOGIN, payload: res.data });
  } catch (error) {
    // error.response.data.errors.forEach((el) => {
    //   dispatch(alert_errors(el.msg));
    // });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const Get_current = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/users/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const logout = () => {
  return { type: LOGOUT };
};
