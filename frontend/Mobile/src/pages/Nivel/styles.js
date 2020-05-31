import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F1E3CB",
    paddingTop: 20,
    height: "100%",
  },
  containerProgress: {
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  tittle: {
    paddingHorizontal: 10,
    color: "#F58220",
    fontSize: 25,
    paddingBottom: 5,
  },
  containerOption: {
    margin: 25,
    borderRadius: 20,
    flexDirection: "row",
    padding: 15,
    borderWidth: 3,
    borderColor: "#C4C4C4",
  },
  containerOptionSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  containerOptionTittle: {
    fontSize: 20,
    color: "#525252",
    fontWeight: "bold",
  },
  containerText: {
    flexDirection: "column",
    maxWidth: "80%",
    paddingLeft: 15,
  },
  containerOptionText: {
    fontSize: 12,
    color: "#525252",
  },
});
