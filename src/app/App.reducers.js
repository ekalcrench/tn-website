import { combineReducers } from "redux";

const initialState = {
  isLoggedIn: false,
  data: null,
};

function userDataReducer(state= initialState, action) {
  if (action.type === "LOGIN") {
    state.isLoggedIn = true;
    state.data = action.payload;
  } else if (action.type === "LOGOUT"){
    state.isLoggedIn = false;
    state.data = null;
  }
  return {...state};
}

const AppReducer = combineReducers({
    userData : userDataReducer,
})

export {AppReducer}