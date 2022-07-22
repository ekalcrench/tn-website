import { combineReducers } from "redux";
import { SideMenuReducer } from "../components/side-menu/SideMenuComponent.reducer";
import { GensetMonitoringReducer } from "../components/genset-data/GensetData.reducer";
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
  sideMenuComponent: SideMenuReducer,
});

export { AppReducer };
