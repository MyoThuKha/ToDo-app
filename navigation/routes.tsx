import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "../pages/home";
import Intro from "../pages/intro";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

const Routing = () => {
  const [fontsLoaded] = useFonts({
    display: require("../assets/fonts/main-font.otf"),
  });
  const onLayoutView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="intro"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
