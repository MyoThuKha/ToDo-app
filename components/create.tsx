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
  const foreground: string = useSelector((state: any) => state.user.foreground);
  const background: string = useSelector((state: any) => state.user.background);
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const handleAdd = () => {
    if (inputRef.current !== "") {
      dispatch(addTask({ text: inputRef.current, time: "morning" }));
    }
  };

  return (
    <View style={styles.section1}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginEnd: 8,
        }}
      >
        <Text style={{ ...styles.title, color: foreground }}>Your Task</Text>
        <AntDesign name="menu-fold" size={24} color={foreground} />
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
      <View style={{ ...styles.btn, borderColor: foreground }}>
        <TouchableOpacity
          // style={{ ...globalstyles.btn, backgroundColor: foreground }}
          onPress={() => handleAdd()}
        >
          {/* <AntDesign name="plus" size={24} color={background} /> */}
          <Text style={{ color: foreground, fontSize: 18 }}>Add Task</Text>
        </TouchableOpacity>
      </View>
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
