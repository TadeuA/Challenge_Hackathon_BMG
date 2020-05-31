import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F1E3CB",
    height: "100%",
    paddingHorizontal: 5,
  },
  title: {
    color: "#F58220",
    fontSize: 25,
  },
  gamerSelectGroup: {
    fontSize: 18,
  },
  groupsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F58220",
    paddingBottom: 10,
  },
  textGroupsContainer: {
    fontSize: 18,
  },
  backToShild: {
    backgroundColor: "rgba(245, 130, 32, 0.5)",
    height: 108,
    width: 91,
    margin: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backToShildColor: {
    backgroundColor: "rgba(245, 130, 32, 0.5)",
  },
  backToShildSelect: {
    backgroundColor: "#F58220",
  },
  shild: {
    height: 80,
    width: 80,
  },
  textPoints: {
    alignSelf: "flex-end",
    marginRight: 10,
    fontSize: 22,
  },
  gamersContainer: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  gamersContainerPeople: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  peopleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  position: {
    fontSize: 25,
    paddingRight: 5,
  },
  pointsGamers: {
    fontSize: 25,
  },
  avatar: {
    paddingHorizontal: 10,
  },
});
