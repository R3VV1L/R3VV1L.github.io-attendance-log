import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "./reducer";

const rootReducer = combineReducers({
  table: tableReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
