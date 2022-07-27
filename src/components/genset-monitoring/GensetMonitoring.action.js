import axios from "axios";
import { API } from "../../common/constants";

export const GENSET_DASHBOARD_DATA_REQUEST = "GENSET_DASHBOARD_DATA_REQUEST";
export const GENSET_DASHBOARD_DATA_SUCCESS = "GENSET_DASHBOARD_DATA_SUCCESS";
export const GENSET_DASHBOARD_DATA_FAILURE = "GENSET_DASHBOARD_DATA_FAILURE";

export const getGensetDashboardData = (dispatch) => {
  dispatch({
    type: GENSET_DASHBOARD_DATA_REQUEST,
  });
  axios
    .get(API.GENSET_DASHBOARD)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GENSET_DASHBOARD_DATA_SUCCESS,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: GENSET_DASHBOARD_DATA_FAILURE,
        payload: err.message,
      });
    });
};
