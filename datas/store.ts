import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer";
import userReducer from "./userReducer";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

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
  middleware: [thunk],
});

export default store;
export const persistor = persistStore(store);
