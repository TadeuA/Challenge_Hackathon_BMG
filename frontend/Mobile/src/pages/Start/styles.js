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
  },
  textNick: {
    fontFamily: "Roboto",
    fontSize: 32,
    color: "#fff",
    paddingBottom: 40,
  },
  textNickName: {
    fontWeight: "bold",
  },
  textLogin: {
    color: "#F58220",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    paddingBottom: 55,
  },
  textLoginForm: {
    position: "relative",
    top: -60,
    backgroundColor: "#F1E3CB",
    padding: 15,
    borderRadius: 20,
    marginRight: 30,
    marginLeft: 30,
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
    fontSize: 20,
    padding: 10,
  },
  textLoginUser: {
    padding: 10,
    fontSize: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#cccccc",
    marginBottom: 20,
    paddingRight: 50,
    marginRight: 30,
  },
  containerLoginButton: {
    flexDirection: "row",
    backgroundColor: "#F58220",
    borderRadius: 50,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 110,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    width: 150,
  },
  textLoginButton: {
    color: "#FFF",
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
