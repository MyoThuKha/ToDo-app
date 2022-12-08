import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import globalStyle from "../styles/global";
import { AntDesign } from "@expo/vector-icons";
import { addTask } from "../datas/reducer";
import { useRef } from "react";

interface createProps {}

const CreateTask: React.FC<createProps> = ({}) => {
  const foreground = useSelector(
    (state: { user: { foreground: string } }) => state.user.foreground
  );
  const background = useSelector(
    (state: { user: { background: string } }) => state.user.background
  );
  const dispatch = useDispatch();
  const inputRef = useRef("");

  return (
    <View style={styles.section1}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ ...styles.title, color: foreground }}>Your Task</Text>
      </View>

      {/* input area */}
      <View style={styles.inputArea}>
        <TextInput
          placeholder="Abc"
          multiline
          placeholderTextColor={foreground}
          style={{ ...styles.input, color: foreground }}
          onChangeText={(val) => (inputRef.current = val)}
        />
      </View>

      {/* submit Button */}
      <TouchableOpacity
        // style={{ ...globalstyles.btn, backgroundColor: foreground }}
        style={{ ...styles.btn, borderColor: foreground }}
        onPress={() => {
          if (inputRef.current !== "") {
            dispatch(addTask({ text: inputRef.current, time: "morning" }));
          }
        }}
      >
        {/* <AntDesign name="plus" size={24} color={background} /> */}
        <Text style={{ color: foreground, fontSize: 18 }}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CreateTask;
const styles = StyleSheet.create({
  section1: {
    flex: 5,
    position: "relative",
    paddingHorizontal: 16,
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
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
  },
  btn: {
    alignItems: "center",
    paddingVertical: 24,
  },
});
