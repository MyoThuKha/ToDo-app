import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import globalStyle from "../styles/global";
import { AntDesign } from "@expo/vector-icons";

interface createProps {}

const CreateTask: React.FC<createProps> = ({}) => {
  const foreground: string = useSelector((state: any) => state.user.foreground);
  const background: string = useSelector((state: any) => state.user.background);
  return (
    <View style={styles.section1}>
      <Text style={{ ...styles.title, color: foreground }}>Your Task</Text>
      <TextInput
        placeholder="Abc"
        multiline
        placeholderTextColor={foreground}
        style={{ ...styles.input, color: foreground }}
      />
      <TouchableOpacity
        style={{ ...globalStyle.goTo, backgroundColor: foreground }}
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
