import React from "react";
import { useState, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity, Modal } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, deleteTask } from "../datas/reducer";
import globalStyle from "../styles/global";
import { Ionicons } from "@expo/vector-icons";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={[styles.section2]}>
      {/* Your Routine */}
      <Text style={[globalStyle.display, styles.title]}>Your Routine</Text>

      {/* delete confirmation */}
      <Modal animationType="slide" visible={showModal} transparent={true}>
        <View style={styles.modal}>
          <Text style={[globalStyle.display, styles.dTitle]}>
            Delete All Tasks?
          </Text>
          <View style={styles.deleteBtn}>
            <TouchableOpacity
              onPress={() => {
                dispatch(deleteAll());
                setShowModal(false);
              }}
            >
              <Text>Confirm</Text>
            </TouchableOpacity>
            <View
              style={{ ...globalStyle.verticleLine, backgroundColor: "black" }}
            ></View>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* total */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.total}>
          <Text>{tasks.length} Tasks</Text>
          <TouchableOpacity onPress={() => changeCategory()}>
            <Text style={{ textTransform: "capitalize" }}>{current}</Text>
          </TouchableOpacity>
        </View>

        {/* delete all */}
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Ionicons name="trash-outline" color="black" size={24} />
        </TouchableOpacity>
      </View>

      {/* items */}
      {tasks.length === 0 ? (
        // no task message
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ ...globalStyle.display, fontSize: 16 }}>
            There is no Tasks to Finish.
          </Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }: { item: { text: string; key: string } }) => {
            return (
              <View style={styles.item}>
                {/* task */}
                <Text style={{ ...globalStyle.display, flex: 1 }}>
                  {item.text}
                </Text>

                {/* marks as done */}
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
      )}
    </View>
  );
};
export default Tasks;

const styles = StyleSheet.create({
  section2: {
    elevation: 4,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 24,
    flex: 4,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "relative",
  },

  modal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  dTitle: {
    fontSize: 24,
    paddingVertical: 24,
    borderBottomWidth: 1,
  },

  deleteBtn: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 4,
    paddingVertical: 12,
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
