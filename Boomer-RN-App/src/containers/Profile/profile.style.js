import { StyleSheet } from "react-native";

export default StyleSheet.create({
  headerTitleText: {
    textAlign: "center",
    fontSize: 25,
    color: "#FFF"
  },
  headerFlex: {
    flex: 1
  },
  headerContent: {
    backgroundColor: "#0e2f50"
  },
  thumbNailButtonStyleLeft: {
    backgroundColor: "#164d83",
    position: "absolute",
    borderWidth: 1,
    borderColor: "#ed9019",
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 10,
    left: 60
  },
  thumbNailButtonStyleRight: {
    backgroundColor: "#164d83",
    position: "absolute",
    borderWidth: 1,
    borderColor: "#ed9019",
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 10,
    right: 60
  },
  changePasswordButton: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#164d83",
    borderWidth: 1,
    borderColor: "#ed9019"
  },
  changePasswordButtonText: {
    width: "100%",
    textAlign: "center"
  },
  passwordTitle: {
    textAlign: "center",
    fontSize: 25,
    marginTop: "5%",
    color: "#FFFFFF"
  },
  passwordInput: {
    width: "90%",
    marginRight: "10%"
  },
  passwordInputText: {
    color: "white"
  },
  passwordLabel: {
    color: "#ed9019"
  },
  passwordForm: {
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
  passwordButton: {
    width: "90%",
    marginTop: "10%",
    marginLeft: "5%",
    backgroundColor: "#164d83",
    borderWidth: 1,
    borderColor: "#ed9019",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8
  },
  passwordButtonText: {
    width: "100%",
    textAlign: "center"
  },
  modalCloseButton: {
    position: "absolute",
    top: 20,
    right: 0,
    backgroundColor: "#164d83",
    borderWidth: 1,
    borderColor: "#ed9019",
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 5
  }
});
