import { ALERT_ERRORS, CLEAR_ERRORS } from "../ActionTypes/alertTypes";

export const alert_errors = (msg) => async (dispatch) => {
  const id = Math.random();
  dispatch({ type: ALERT_ERRORS, payload: { msg, id } });
  setTimeout(() => {
    dispatch({ type: CLEAR_ERRORS, payload: id });
  }, 3000);
};
