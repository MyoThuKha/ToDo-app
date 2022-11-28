import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import React from "react";

interface T {
  navigation: any;
}
const Intro: React.FC<T> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* form box */}
      <View style={styles.box}></View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  box: {},
});
