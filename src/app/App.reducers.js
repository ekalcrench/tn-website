import { combineReducers } from "redux";
import { MasterCustomerReducer } from "../components/master-customer/MasterCustomer.reducer";
import { SideMenuReducer } from "../components/side-menu/SideMenuComponent.reducer";
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
  sideMenuComponent: SideMenuReducer,
  masterCustomerComponent: MasterCustomerReducer,
});

export { AppReducer };
