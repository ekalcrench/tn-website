import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./app";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: AppReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
