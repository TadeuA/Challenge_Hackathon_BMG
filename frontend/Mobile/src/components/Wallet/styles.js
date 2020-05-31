import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const show = StyleSheet.absoluteFill;
export default StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
  },
  container: {
    flex: 1,
  },
  absolute: show,
  card: { borderRadius: 10, width: "100%" },
  content: {
    height: height * 2,
  },
});
