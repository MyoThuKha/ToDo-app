import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer";
import userReducer from "./userReducer";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistTasks = persistReducer(persistConfig, taskReducer);
const persistUser = persistReducer(persistConfig, userReducer);
const store = configureStore({
  reducer: {
    tasks: persistTasks,
    user: persistUser,
  },
});

export default store;
export const persistor = persistStore(store);
