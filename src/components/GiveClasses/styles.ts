import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  teacherForm: {
    elevation: 4,
    zIndex: 100,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f7",
  },

  form: {
    marginTop: 24,
    color: "#d4c2ff",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  titleFormText: {
    fontSize: 30,
    fontFamily: "Archivo_700Bold",
    color: "#32264d",
    paddingVertical: 12,
    borderBottomColor: "#c6c6d0",
    borderBottomWidth: 1,
  },

  label: {
    marginTop: 10,
    fontFamily: "Poppins_400Regular",
  },

  input: {
    height: 54,
    backgroundColor: "#f0f0f7",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 16,
    width: "100%",
  },

  inputBlock: {
    width: "48%",
  },

  inputGroup: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  inputGroupSide: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  okButton: {
    marginVertical: 10,
    backgroundColor: "#04d361",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  okButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
