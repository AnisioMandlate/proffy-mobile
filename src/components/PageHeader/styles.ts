import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#8257e5",
    overflow: "hidden",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 20,
  },
  description: {
    fontFamily: "Archivo_400Regular",
    color: "#fff",
    fontSize: 16,
    maxWidth: 200,
    marginTop: 10,
  },
});

export default styles;
