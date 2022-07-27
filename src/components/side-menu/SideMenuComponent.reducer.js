import {
  SET_CURRENT_COMPONENT,
  SET_JOB_EXECUTION_MENU,
} from "./SideMenuComponent.action";
import { combineReducers } from "@reduxjs/toolkit";
import { Component_Name } from "../../common/constants";

const initialState = {
  currentComponent: Component_Name.GENSET_MONITORING,
  jobExecutionMenu: false,
};

const SideMenuDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload,
      };
    case SET_JOB_EXECUTION_MENU:
      return {
        ...state,
        jobExecutionMenu: !state.jobExecutionMenu,
      };
    default:
      return state;
  }
};

const SideMenuReducer = combineReducers({
  sideMenuData: SideMenuDataReducer,
});

export { SideMenuReducer };
