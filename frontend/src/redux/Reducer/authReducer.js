import {
  FAIL,
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../ActionTypes/auhTypes";

const initialState = {
  user: {},
  auth: false,
  errors: [],
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.newUser, auth: true };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.founduser, auth: true };
    case GET_CURRENT:
      return { ...state, user: payload, auth: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null, auth: false };
    case FAIL:
      return { ...state, errors: payload.errors };

    default:
      return state;
  }
};
export default authReducer;
