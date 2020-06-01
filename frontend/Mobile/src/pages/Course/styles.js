import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F1E3CB",
    height: "100%",
  },
  containerProgress: {
    alignItems: "center",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  courseLession: {
    height: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    borderWidth: 3,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    margin: 20,
  },
  courseTittle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  courseTittleLesson: {
    color: "#525252",
    fontSize: 15,
    fontWeight: "bold",
    padding: 3,
  },
  courseDescreption: {
    color: "#525252",
    fontSize: 15,
    textAlign: "center",
    padding: 3,
  },
  courseOption: {
    flexDirection: "row",

    maxWidth: "100%",
  },
  courseOptionSelect: {
    margin: 5,
    width: "45%",
    padding: 20,
    borderWidth: 3,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    height: 150,
    justifyContent: "center",
  },
  courseOptionText: {
    fontSize: 16,
    textAlign: "center",
  },
  courseButton: {
    backgroundColor: "#24B600",
    padding: 15,
    borderRadius: 20,
  },
  courseButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  courseArrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
