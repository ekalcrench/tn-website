import {
  SET_CURRENT_COMPONENT,
  SET_CURRENT_MENU,
} from "./SideMenuComponent.action";
import { combineReducers } from "@reduxjs/toolkit";
import { Component_Name, Side_Menu } from "../../common/constants";

const initialState = {
  currentComponent: Component_Name.GENSET_DASHBOARD,
  currentMenu: "",
};

const SideMenuDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload,
      };
    case SET_CURRENT_MENU:
      if (state.currentMenu === action.payload) {
        return {
          ...state,
          currentMenu: "",
        };
      } else {
        return {
          ...state,
          currentMenu: action.payload,
        };
      }
    default:
      return state;
  }
};

const SideMenuReducer = combineReducers({
  sideMenuData: SideMenuDataReducer,
});

export { SideMenuReducer };
