import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { StatusBar as ExpoBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoBar style="auto" />
      <Text style={styles.text}>Today</Text>
      <Text style={styles.text}>Friday, Oct 8</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
});
