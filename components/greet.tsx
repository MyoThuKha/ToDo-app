import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import globalStyle from "../styles/global";

interface greetProps {}

const Greet: React.FC<greetProps> = ({}) => {
  const username: string = useSelector((state: any) => state.user.name);
  const foreground: string = useSelector((state: any) => state.user.foreground);
  const background: string = useSelector((state: any) => state.user.background);

  return (
    <View style={styles.section1}>
      {/* greeting */}
      <View style={styles.greet}>
        <Text
          style={[globalStyle.display, styles.mainText, { color: foreground }]}
        >
          rise and{"\n"}shine, {username}!{"\n"}how are you feeling{"\n"}
          today?
        </Text>
        <TouchableOpacity
          style={{ ...styles.goTo, backgroundColor: foreground }}
        >
          <AntDesign name="arrowright" size={24} color={background} />
        </TouchableOpacity>
      </View>

      {/* Add new text and work mode */}
      <View style={{ ...styles.btnSection, borderTopColor: foreground }}>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <View style={styles.btnContent}>
            <AntDesign name="plus" size={24} color={foreground} />
            <Text style={{ ...styles.btnText, color: foreground }}>
              add new text
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{ ...styles.verticleLine, backgroundColor: foreground }}
        ></View>

        <TouchableOpacity style={styles.btn}>
          <View style={styles.btnContent}>
            <MaterialIcons name="work-outline" size={24} color={foreground} />
            <Text style={{ ...styles.btnText, color: foreground }}>
              Work mode
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Greet;

const styles = StyleSheet.create({
  section1: {
    justifyContent: "space-between",
    flex: 5,
  },
  greet: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  mainText: {
    fontSize: 35,
    paddingHorizontal: 24,
    textTransform: "uppercase",
  },
  goTo: {
    width: 69,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 24,
  },
  //Buttons
  btnSection: {
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 72,
  },
  btn: {
    flex: 1,
    alignItems: "center",
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnText: {
    textTransform: "capitalize",
    paddingLeft: 5,
  },
  verticleLine: {
    height: "100%",
    width: 1,
  },
});
