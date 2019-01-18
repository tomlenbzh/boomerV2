import { StyleSheet, Dimensions } from "react-native";

const ScreenHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  headerTitle: {
    marginTop: "10%"
  },
  headerTitleText: {
    textAlign: "center",
    fontSize: 50,
    color: "#FFF"
  },
  loginContainer: {
    height: ScreenHeight,
    backgroundColor: "#286baf"
  },
  loginTitle: {
    textAlign: "center",
    fontSize: 25,
    marginTop: "5%",
    color: "#FFFFFF"
  },
  loginInput: {
    width: "90%",
    marginRight: "10%"
  },
  loginInputText: {
    color: "white"
  },
  loginLabel: {
    color: "#ed9019"
  },
  loginForm: {
    width: "90%",
    marginTop: "5%",
    paddingBottom: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    padding: "5%",
    backgroundColor: "#16202c",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ed9019"
  },
  loginButton: {
    width: "90%",
    marginTop: "10%",
    marginLeft: "5%",
    backgroundColor: "#0e2f50",
    borderWidth: 1,
    borderColor: "#ed9019",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8
  },
  loginButtonText: {
    width: "100%",
    textAlign: "center"
  },
  footer: {
    backgroundColor: "#0e2f50"
  },
  footerTabActive: {
    backgroundColor: "#0e2f50"
  }
});
