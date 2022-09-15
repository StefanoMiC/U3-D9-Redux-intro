import { configureStore } from "@reduxjs/toolkit";
// CORE REDUX LIBRARY @reduxjs/toolkit
import mainReducer from "../reducers";

//configure store creates the actual redux store
const store = configureStore({
  //this configuration object(s) will be necessary to set up the redux store properly
  reducer: mainReducer,
});

export default store;
