import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    backgroundColor: "#DAE1E7",
    height: "100%",
    paddingTop: Constants.statusBarHeight - 10,
  },
  profileContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    marginLeft: 20,
    color: "#00909E",
    fontSize: 25,
  },
  imgProfile: {
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  userName: {
    marginVertical: 10,
    fontSize: 25,
    color: "#00909E",
    fontWeight: "bold",
  },
  menuContainer: {
    backgroundColor: "#C4C4C4",
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
  menuItem: {
    marginVertical: 5,
  },
  textMenuItem: {
    color: "#00909E",
    fontSize: 16,
  },
  textMenuExit: {
    color: "#DD0612",
    fontSize: 16,
  },
});
