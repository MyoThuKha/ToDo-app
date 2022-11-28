import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "react-native";
import Tasks from "../components/tasks";
import { useCallback, useState } from "react";
import globalStyle from "../styles/global";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import Greet from "../components/greet";

// return "#f2eee9";

SplashScreen.preventAutoHideAsync();

const Home = ({ navigation }: { navigation: any }) => {
  const foreground: string = useSelector((state: any) => state.user.foreground);
  const background: string = useSelector((state: any) => state.user.background);

  // font load
  const [fontsLoaded] = useFonts({
    display: require("../assets/fonts/main-font.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <View
      style={{ ...styles.container, backgroundColor: background }}
      onLayout={onLayoutRootView}
    >
      {/* app bar */}
      <View style={{ ...styles.header, borderBottomColor: foreground }}>
        <View>
          <Text
            style={[globalStyle.display, styles.today, { color: foreground }]}
          >
            Today
          </Text>
          <Text
            style={[globalStyle.display, styles.date, { color: foreground }]}
          >
            Friday, Oct 8
          </Text>
        </View>
        <View style={styles.profile}></View>
      </View>
      <Greet />
      <Tasks />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },

  header: {
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  today: {
    fontSize: 20,
  },
  date: {
    fontSize: 15,
  },
  profile: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
