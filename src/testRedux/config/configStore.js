import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux"
import letters from "testRedux/modules/lettersSlice";
import member from "testRedux/modules/memberSlice";

const store = configureStore({
  reducer: {
    letters,
    member,
  }
})

export default store;