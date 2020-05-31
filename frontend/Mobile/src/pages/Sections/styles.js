import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F1E3CB",
    height: "100%",
    paddingHorizontal: 5,
  },
  imageSize: {
    height: 100,
    width: 100,
  },
  textCurses: {
    fontSize: 22,
    color: "#F58220",
    padding: 10,
  },
  curses: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  listCurses: {
    backgroundColor: "#F58220",
    padding: 25,
    margin: 20,
    borderRadius: 100,
  },
});
