import { configureStore } from "@reduxjs/toolkit";
import letters from "testRedux/modules/lettersSlice";
import member from "testRedux/modules/memberSlice";
import auth from "testRedux/modules/authSlice"

const store = configureStore({
  reducer: {
    letters,
    member,
    auth,
  }
})

export default store;