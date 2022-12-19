import { Provider } from "react-redux";
import Routing from "./navigation/routes";
import store from "./datas/store";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./datas/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ExpoStatusBar style="auto" />
        <Routing></Routing>
      </PersistGate>
    </Provider>
  );
}
