import { Text } from "react-native";
import React from "react";

interface displayTextProps {
  children: any;
  style: {};
}

const Display: React.FC<displayTextProps> = ({ children, style = {} }) => {
  return <Text style={[{ fontFamily: "display" }, style]}>{children}</Text>;
};
export default Display;
