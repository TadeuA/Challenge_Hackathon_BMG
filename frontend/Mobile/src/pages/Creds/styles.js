import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F1E3CB",
    height: "100%",
  },
  containerProgress: {
    alignItems: "center",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  courseLession: {
    padding: 15,
    borderWidth: 3,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    margin: 20,
    height: "80%",
    justifyContent: "space-between",
  },
  tittle: {
    fontSize: 18,
    color: "#EB8220",
  },
  subTittle: {
    fontSize: 15,
    color: "#525252",
    paddingBottom: 5,
  },
  textDesciption: {
    fontSize: 12,
    color: "#525252",
    paddingBottom: 5,
  },
  dudaAjuda: {
    flexDirection: "row",
    padding: 10,
  },
  dudaAjudaContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dudaAjudaText: {
    color: "#F58220",
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: "80%",
  },
  courseButton: {
    backgroundColor: "#24B600",
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  courseButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
