import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

const Reducers = combineReducers({
  first: Reducer,
});

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
