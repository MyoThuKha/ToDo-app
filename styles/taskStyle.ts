import { StyleSheet } from "react-native";
export const taskStyles = StyleSheet.create({
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
    paddingVertical: 14,
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
