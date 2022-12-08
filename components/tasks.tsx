import React from "react";
import { useState, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../datas/reducer";
import globalStyle from "../styles/global";

interface dataProps {
  text: string;
  important: boolean;
  key: string;
}

const Tasks: React.FC = ({}) => {
  const data = useSelector((state: any) => state.tasks.data);
  const foreground = useSelector((state: any) => state.user.foreground);
  const background = useSelector((state: any) => state.user.background);
  const dispatch = useDispatch();

  const [current, setCurrent] = useState("all");

  const tasks = useMemo(() => {
    return current === "all"
      ? data
      : data.filter((each: any) => each.important);
  }, [current, data]);

  const changeCategory = () => {
    const local = ["all", "important"];
    const curr = local.indexOf(current);
    if (curr === local.length - 1) setCurrent(local[0]);
    else setCurrent(local[curr + 1]);
  };

  return (
    <View style={[styles.section2, { backgroundColor: foreground }]}>
      <Text style={{ ...globalStyle.display, ...styles.title }}>
        Your Routine
      </Text>
      <View style={styles.total}>
        <Text style={{ borderRightColor: foreground, borderRightWidth: 1 }}>
          {tasks.length} Tasks
        </Text>
        <TouchableOpacity onPress={() => changeCategory()}>
          <Text style={{ textTransform: "capitalize", paddingRight: 8 }}>
            {current}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }: { item: { text: string; key: string } }) => {
          return (
            <View style={styles.item}>
              <Text style={globalStyle.display}>{item.text}</Text>
              <TouchableOpacity
                style={[styles.done, { backgroundColor: background }]}
                onPress={() => dispatch(deleteTask(item.key))}
              >
                <Text style={{ color: foreground, fontSize: 12 }}>
                  Mark as done
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Tasks;

const styles = StyleSheet.create({
  section2: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    flex: 4,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    fontSize: 28,
  },

  total: {
    marginVertical: 15,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: 182,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  item: {
    paddingVertical: 32,
    borderBottomColor: "#d1d1d1",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  done: {
    height: 38,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
