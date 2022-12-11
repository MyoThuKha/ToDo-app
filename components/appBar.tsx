import moment from "moment";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import globalStyle from "../styles/global";

interface appBarProps {
  frontColor: string;
  backColor: string;
}

const AppBar: React.FC<appBarProps> = ({ frontColor, backColor }) => {
  const date = new Date();

  const [day, month, dateOfMonth] = [
    moment().format("dddd"),
    moment().format("MMM"),
    date.getDate(),
  ];

  return (
    <View
      style={{
        ...styles.header,
        backgroundColor: backColor,
        borderBottomColor: frontColor,
      }}
    >
      <View>
        <Text
          style={[globalStyle.display, styles.today, { color: frontColor }]}
        >
          Today
        </Text>
        <Text style={[globalStyle.display, styles.date, { color: frontColor }]}>
          {/* Friday, Oct 8 */}
          {day + "," + " " + month + " " + dateOfMonth}
        </Text>
      </View>
      {/* <View style={styles.profile}></View> */}
      {<Text style={{ color: frontColor }}>{moment().format("LT")}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  today: {
    fontSize: 20,
  },
  date: {
    fontSize: 15,
  },
  profile: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});

export default AppBar;
