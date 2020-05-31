import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: "space-between",
    backgroundColor: "#F58220",
  },
  containerTop: {
    paddingHorizontal: 39,
    paddingBottom: 30,
  },
  textWelcome: {
    color: "#fff",
    fontSize: 40,
  },
  textNick: {
    fontFamily: "Roboto",
    fontSize: 25,
    color: "#fff",
    lineHeight: 30,
    paddingBottom: 40,
  },
  textLogin: {
    color: "#F58220",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "left",
  },
  textLoginForm: {
    position: "relative",
    top: -60,
    backgroundColor: "#F1E3CB",
    padding: 15,
    borderRadius: 20,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 130,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
  textLoginName: {
    fontSize: 14,
    padding: 10,
    color: "#999999",
  },
  textLoginUser: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "#F58220",
    marginBottom: 20,
    textAlign: "center",
    borderRadius: 30,
  },
  containerLoginButton: {
    backgroundColor: "#F58220",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textLoginButton: {
    color: "#FFF",
    fontSize: 20,
    padding: 10,
  },
  backgroundBotton: {
    backgroundColor: "#F1E3CB",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  ranckContainer: {
    backgroundColor: "green",
  },
  ranckContainer: {
    borderTopColor: "#FFF",
    borderTopWidth: 20,
  },
});
