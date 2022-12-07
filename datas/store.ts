import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
// import persistReducer from "redux-persist/es/persistReducer";
import taskReducer from "./reducer";
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// const persistData = persistReducer(persistConfig, taskReducer);
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer,
  },
});

export default store;
