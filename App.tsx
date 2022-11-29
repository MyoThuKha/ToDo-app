import { Provider } from "react-redux";
import Routing from "./navigation/routes";
import store from "./datas/store";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  return (
    <Provider store={store}>
      <ExpoStatusBar style="auto" />
      <Routing></Routing>
    </Provider>
  );
}
