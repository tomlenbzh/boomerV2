import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
  headerTitleText: {
    textAlign: "center",
    fontSize: 25,
    color: "#FFF"
  },
  headerFlex: {
    flex: 1
  },
  headerContent: {
    backgroundColor: "#16202c"
  },
  contentStyle: {
    marginTop: 5
  },
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  profilePictureStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#ed9019"
  },
  profilePictureButtonStyleLeft: {
    backgroundColor: "#0e2f50",
    position: "absolute",
    borderWidth: 1,
    borderColor: "#ed9019",
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 10,
    left: 60
  },
  profilePictureButtonStyleRight: {
    backgroundColor: "#0e2f50",
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
    backgroundColor: "#0e2f50",
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
    marginLeft: "5%",
    marginRight: "5%",
    padding: "5%",
    backgroundColor: "#16202c",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ed9019"
  },
  passwordFormTitle: {
    width: "100%",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    fontSize: 40
  },
  passwordButton: {
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
  passwordButtonText: {
    width: "100%",
    textAlign: "center"
  },
  modalContainer: {
    flex: 1
  },
  modalCloseButton: {
    position: "absolute",
    top: 20,
    right: 0,
    backgroundColor: "#0e2f50",
    borderWidth: 1,
    borderColor: "#ed9019",
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 5
  },
  modalCloseIcon: {
    textAlign: "center"
  }
});
