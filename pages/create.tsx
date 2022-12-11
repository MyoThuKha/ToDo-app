import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, StatusBar } from "react-native";
import { TouchableOpacity, useColorScheme } from "react-native";
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
          <Text style={{ ...styles.title, color: frontColor }}>Your Task</Text>
          <AntDesign
            name={impt ? "star" : "staro"}
            size={24}
            color={frontColor}
            onPress={() => setImpt(() => !impt)}
          />
        </View>

        {/* input area */}
        <View style={{ ...styles.inputArea, borderColor: frontColor }}>
          <TextInput
            placeholder="Abc"
            multiline
            placeholderTextColor={frontColor}
            style={{ ...styles.input, color: frontColor }}
            onChangeText={(val) => (inputRef.current = val)}
          />
        </View>

        {/* submit Button */}
        <TouchableOpacity
          // style={{ ...globalstyles.btn, backgroundColor: foreground }}
          style={{ ...styles.btn, borderColor: frontColor }}
          onPress={() => {
            addTaskHandle();
            navigation.pop();
          }}
        >
          {/* <AntDesign name="plus" size={24} color={background} /> */}
          <Text style={{ color: frontColor, fontSize: 18 }}>Add Task</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  input: {
    fontSize: 16,
    ...globalStyle.display,
    paddingHorizontal: 8,
  },
  inputArea: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 24,
    borderRadius: 12,
    borderWidth: 1,
  },
  btn: {
    alignItems: "center",
    paddingVertical: 24,
  },
});
