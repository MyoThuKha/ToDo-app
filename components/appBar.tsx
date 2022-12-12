import moment from "moment";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyle from "../styles/global";
import { useState, useEffect } from "react";

interface appBarProps {
  frontColor: string;
  backColor: string;
  title: string;
}

const AppBar: React.FC<appBarProps> = ({ frontColor, backColor, title }) => {
  const date = new Date();

  const [day, month, dateOfMonth] = [
    moment().format("dddd"),
    moment().format("MMM"),
    date.getDate(),
  ];
  // const [time, setTime] = useState(moment().format("LT"));
  // useEffect(() => {
  //   setTime(moment().format("LT"));
  //   return navigation.addListener("focus", () => {
  //     setTime(moment().format("LT"));
  //   });
  // }, []);

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
      {<Text style={{ color: frontColor }}>{title}</Text>}
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
