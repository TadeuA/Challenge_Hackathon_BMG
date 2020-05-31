import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F1E3CB",
    paddingTop: 20,
    height: "100%",
  },
  containerProgress: {
    alignItems: "center",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  containerIn: {
    flexDirection: "column",
    height: "80%",
    marginHorizontal: 10,
    borderWidth: 3,
    borderColor: "#C4C4C4",
    justifyContent: "space-between",
  },
  title: {
    paddingHorizontal: 10,
    color: "#F58220",
    fontSize: 25,
    paddingBottom: 15,
  },
  containerOption: {
    padding: 34.5,
    borderWidth: 3,
    borderColor: "#C4C4C4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerOptionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
