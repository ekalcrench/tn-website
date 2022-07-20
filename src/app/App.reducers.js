import { combineReducers } from "redux";
import { GensetMonitoringReducer } from "../pages/genset-monitoring/GensetMonitoring.reducer";
import { LOGIN_ACTION, LOGOUT_ACTION } from "./App.action";

const initialState = {
  isLoggedIn: false,
  users: null,
};

function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        isLoggedIn: false,
        users: action.payload,
      };
    case LOGOUT_ACTION:
      return {
        isLoggedIn: false,
        users: null,
      };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  userData: userDataReducer,
  gensetMonitoringPage: GensetMonitoringReducer,
});

export { AppReducer };
