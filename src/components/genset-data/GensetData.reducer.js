import { combineReducers } from "@reduxjs/toolkit";
import {
  GENSET_MONITORING_DATA_REQUEST,
  GENSET_MONITORING_DATA_SUCCESS,
  GENSET_MONITORING_DATA_FAILURE,
} from "./GensetData.action";

const initialState = {
  loading: true,
  dataCurrentPage: null,
  dataNextPage: null,
  startRequest: 0,
  error: "",
};

const GensetDataTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENSET_MONITORING_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GENSET_MONITORING_DATA_SUCCESS:
      return {
        loading: false,
        dataCurrentPage: action.payload.responseData,
        dataNextPage: action.payload.responseData,
        startRequest: action.payload.indexDataStartRequest,
        error: "",
      };
    case GENSET_MONITORING_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const GensetMonitoringReducer = combineReducers({
  gensetData: GensetDataTableReducer,
});

export { GensetMonitoringReducer };
