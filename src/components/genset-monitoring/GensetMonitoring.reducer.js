import {
  GENSET_DASHBOARD_DATA_REQUEST,
  GENSET_DASHBOARD_DATA_SUCCESS,
  GENSET_DASHBOARD_DATA_FAILURE,
} from "./GensetMonitoring.action";

export const initialStateGensetDashboard = {
  loading: true,
  error: "",
  gensetCode: "",
  lastUpdate: "",
  image: "",
  customerLocation: "",
  runStop: false,
  autoStart: false,
  commonAlarm: false,
  failToStart: false,
};

export const GensetDashboardReducer = (state, action) => {
  switch (action.type) {
    case GENSET_DASHBOARD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GENSET_DASHBOARD_DATA_SUCCESS:
      return {
        loading: false,
        error: "",
        gensetCode: action.payload.engineNumber,
        lastUpdate: action.payload.lastUpdated,
        image: action.payload.img,
        customerLocation: action.payload.customerLocationName,
        runStop: action.payload.runStop,
        autoStart: action.payload.autoStart,
        commonAlarm: action.payload.commonAlarm,
        failToStart: action.payload.failtoStart,
      };
    case GENSET_DASHBOARD_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
