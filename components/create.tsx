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
      <Text style={{ ...styles.title, color: foreground }}>Your Task</Text>
      <TextInput
        placeholder="Abc"
        multiline
        placeholderTextColor={foreground}
        style={{ ...styles.input, color: foreground }}
        onChangeText={(val) => (inputRef.current = val)}
      />
      <TouchableOpacity
        style={{ ...globalStyle.goTo, backgroundColor: foreground }}
        onPress={() => {
          if (inputRef.current !== "") {
            dispatch(addTask({ text: inputRef.current, time: "morning" }));
          }
        }}
      >
        <AntDesign name="plus" size={24} color={background} />
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
    fontSize: 50,
    ...globalStyle.display,
    paddingVertical: 16,
  },
  input: {
    fontSize: 16,
    ...globalStyle.display,
    paddingHorizontal: 8,
  },
});
