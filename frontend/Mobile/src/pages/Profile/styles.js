import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F1E3CB",
    height: "100%",
    paddingHorizontal: 5,
  },
  profileContainer: {
    alignItems: "center",
    paddingTop: 30,
    marginBottom: 10,
  },
  title: {
    marginLeft: 20,
    color: "#F58220",
    fontSize: 22,
  },
  profileImage: {
    borderWidth: 4,
    borderColor: "#F58220",
    borderRadius: 100,
  },
  imgProfile: {
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  nameProfile: {
    fontSize: 25,
    fontWeight: "bold",
  },

  userName: {
    marginVertical: 10,
    fontSize: 25,
    color: "#00909E",
    fontWeight: "bold",
  },
  menuProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  menuProfileTitle: {
    color: "#F58220",
    fontSize: 22,
    fontWeight: "bold",
  },

  menuContainer: {
    backgroundColor: "#C4C4C4",
    width: "90%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
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
  profileLevelImg: {
    backgroundColor: "#C4C4C4",
    height: 91,
    width: 91,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profileConquest: {
    padding: 5,
  },
  profileLevel: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  profileLevelDescription: {
    flexDirection: "column",
    padding: 5,
  },
  profileLevelTittle: {
    color: "#525252",
    fontSize: 17,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  profileLevelText: {
    color: "#525252",
    fontSize: 12,
    paddingBottom: 10,
  },
});
