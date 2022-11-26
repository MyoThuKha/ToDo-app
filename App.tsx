import * as SplashScreen from "expo-splash-screen";
import Routing from "./navigation/routes";
import Home from "./pages/home";
SplashScreen.preventAutoHideAsync();

export default function App() {
  return <Routing />;
}
