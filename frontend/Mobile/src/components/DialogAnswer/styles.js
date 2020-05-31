import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 350,
    marginRight: 10,
  },
  dialogContainer: {
    minWidth: "100%",
    maxWidth: 350,
    margin: 10,
    backgroundColor: "#05818D",
    borderColor: "#007581",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  input: {
    marginTop: 10,
    backgroundColor: "#DAE1E7",
    borderRadius: 15,
    height: 40,
    width: 250,
    paddingLeft: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#142850",
    borderRadius: 15,
    width: 111,
    height: 29,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#FFF",
    fontSize: 15,
  },
});
