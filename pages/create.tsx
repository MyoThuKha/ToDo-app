import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, StatusBar } from "react-native";
import {
  TouchableOpacity,
  useColorScheme,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import globalStyle from "../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { addTask } from "../datas/reducer";
import { useRef } from "react";
import AppBar from "../components/appBar";

interface createProps {
  navigation: any;
}

const CreateTask: React.FC<createProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const [impt, setImpt] = useState(false);
  const colorTheme = useColorScheme();

  const frontColor = colorTheme === "light" ? "black" : "white";
  const backColor = colorTheme === "light" ? "white" : "black";

  const addTaskHandle = () => {
    if (inputRef.current !== "") {
      dispatch(addTask({ text: inputRef.current, important: impt }));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...styles.container, backgroundColor: backColor }}>
        <AppBar frontColor={""} backColor={""} />
        <View style={styles.body}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ ...styles.title, color: frontColor }}>
              Your Task
            </Text>
            <AntDesign
              name={impt ? "star" : "staro"}
              size={24}
              color={frontColor}
              onPress={() => setImpt(() => !impt)}
            />
          </View>

          {/* input area */}
          <View style={{ ...styles.mainBox, borderColor: frontColor }}>
            <TextInput
              placeholder="Abc"
              keyboardType="default"
              placeholderTextColor={frontColor}
              style={{ ...styles.input, color: frontColor }}
              onChangeText={(val) => (inputRef.current = val)}
            />
            <View style={styles.btnSection}>
              <TouchableOpacity
                onPress={() => {
                  addTaskHandle();
                  navigation.pop();
                }}
              >
                <Text style={{ color: frontColor }}>Finish</Text>
              </TouchableOpacity>

              <View
                style={{
                  ...globalStyle.verticleLine,
                  backgroundColor: frontColor,
                }}
              ></View>

              <TouchableOpacity onPress={() => navigation.pop()}>
                <Text style={{ color: frontColor }}>Discard</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CreateTask;
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 35,
    ...globalStyle.display,
    paddingVertical: 16,
  },

  mainBox: {
    flex: 1,
    justifyContent: "space-between",
    // paddingHorizontal: 18,
    paddingTop: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    ...globalStyle.display,
    paddingHorizontal: 18,
  },
  btnSection: {
    height: 58,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 1,
  },
});
