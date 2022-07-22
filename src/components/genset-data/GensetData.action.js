import axios from "axios";
import { API } from "../../common/constants";

export const GENSET_MONITORING_DATA_REQUEST = "GENSET_MONITORING_DATA_REQUEST";
export const GENSET_MONITORING_DATA_SUCCESS = "GENSET_MONITORING_DATA_SUCCESS";
export const GENSET_MONITORING_DATA_FAILURE = "GENSET_MONITORING_DATA_FAILURE";

const getDataGensetMonitoringRequest = () => {
  return {
    type: GENSET_MONITORING_DATA_REQUEST,
  };
};

const getDataGensetMonitoringSuccess = (data) => {
  return {
    type: GENSET_MONITORING_DATA_SUCCESS,
    payload: data,
  };
};

const getDataGensetMonitoringFailure = (error) => {
  return {
    type: GENSET_MONITORING_DATA_FAILURE,
    payload: error,
  };
};

export const getDataGensetMonitoringAction = (
  indexDataStartRequest,
  dataLengthRequest
) => {
  return (dispatch) => {
    dispatch(getDataGensetMonitoringRequest());
    axios
      .get(
        API.GENSET_DATA +
          "?_start=" +
          indexDataStartRequest +
          "&_limit=" +
          dataLengthRequest
      )
      .then((response) => {
        const data = {
          responseData: response.data,
          indexDataStartRequest: indexDataStartRequest + dataLengthRequest,
        };
        dispatch(getDataGensetMonitoringSuccess(data));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(getDataGensetMonitoringFailure(error));
      });
  };
};
