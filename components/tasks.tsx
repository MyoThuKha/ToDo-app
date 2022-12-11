import React from "react";
import { useState, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../datas/reducer";
import globalStyle from "../styles/global";

interface dataProps {}

const Tasks: React.FC<dataProps> = ({}) => {
  const data = useSelector((state: any) => state.tasks.data);
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
    <View style={[styles.section2]}>
      <Text style={[globalStyle.display, styles.title]}>Your Routine</Text>
      <View style={styles.total}>
        <Text>{tasks.length} Tasks</Text>
        <TouchableOpacity onPress={() => changeCategory()}>
          <Text style={{ textTransform: "capitalize" }}>{current}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }: { item: { text: string; key: string } }) => {
          return (
            <View style={styles.item}>
              <Text style={{ ...globalStyle.display, flex: 1 }}>
                {item.text}
              </Text>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => dispatch(deleteTask(item.key))}
                >
                  <Text style={{ fontSize: 12, color: "white" }}>
                    Mark as done
                  </Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: "white",
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
    paddingVertical: 32,
  },
  btn: {
    height: 38,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "black",
  },
});
