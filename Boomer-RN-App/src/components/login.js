import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Item, Label, Input, Button, Form, Text } from "native-base";
import PropTypes from "prop-types";

const ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
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
    backgroundColor: "#16202c",
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

const LoginComponent = props => {
  const { navigate, hChange, hSubmit } = props;
  return (
    <Form style={styles.loginForm}>
      <Text style={styles.loginTitle}>Login</Text>
      <Item floatingLabel style={styles.loginInput}>
        <Label style={styles.loginLabel}>Username</Label>
        <Input
          style={styles.loginInputText}
          id="pseudoLogin"
          onChangeText={text => {
            hChange(text, "pseudoLogin");
          }}
        />
      </Item>
      <Item floatingLabel style={styles.loginInput}>
        <Label style={styles.loginLabel}>Password</Label>
        <Input
          style={styles.loginInputText}
          id="passwordLogin"
          onChangeText={text => {
            hChange(text, "passwordLogin");
          }}
        />
      </Item>
      <Button
        rounded
        style={styles.loginButton}
        onPress={() => navigate("Home")}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </Button>
    </Form>
  );
};

LoginComponent.propTypes = {
  navigate: PropTypes.func.isRequired,
  hSubmit: PropTypes.func.isRequired,
  hChange: PropTypes.func.isRequired
};

export default LoginComponent;
