import { Provider } from "react-redux";
import Routing from "./navigation/routes";
import store from "./datas/provider";

export default function App() {
  return (
    <Provider store={store}>
      <Routing />;
    </Provider>
  );
}
