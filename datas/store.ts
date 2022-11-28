import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer,
  },
});

export default store;
