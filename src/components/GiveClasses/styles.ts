import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
    paddingTop: Platform.OS === "ios" ? 20 : 20 + Constants.statusBarHeight,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
