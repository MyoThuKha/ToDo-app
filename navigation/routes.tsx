import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNote from "../pages/create";
import Home from "../pages/home";
import Intro from "../pages/intro";

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="create" component={CreateNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
