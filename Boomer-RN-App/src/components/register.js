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
  registerContainer: {
    height: ScreenHeight,
    backgroundColor: "#286baf"
  },
  registerTitle: {
    textAlign: "center",
    fontSize: 25,
    marginTop: "5%",
    color: "#FFFFFF"
  },
  registerInput: {
    width: "90%",
    marginRight: "10%"
  },
  registerLabel: {
    color: "#ed9019"
  },
  registerForm: {
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
  registerButton: {
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
  registerButtonText: {
    width: "100%",
    textAlign: "center"
  },
  footer: {
    backgroundColor: "#0e2f50"
  },
  footerTabActive: {
    backgroundColor: "#000"
  }
});

const RegisterComponent = props => {
  const { navigate } = props;
  // console.log(props);
  return (
    <Form style={styles.registerForm}>
      <Text style={styles.registerTitle}>Register</Text>
      <Item floatingLabel style={styles.registerInput}>
        <Label style={styles.registerLabel}>Username</Label>
        <Input />
      </Item>
      <Item floatingLabel style={styles.registerInput}>
        <Label style={styles.registerLabel}>Password</Label>
        <Input />
      </Item>
      <Item floatingLabel style={styles.registerInput}>
        <Label style={styles.registerLabel}>Confirm password</Label>
        <Input />
      </Item>
      <Button
        rounded
        style={styles.registerButton}
        onPress={() => props.hSubmit()}
      >
        <Text style={styles.registerButtonText}>Login</Text>
      </Button>
    </Form>
  );
};

RegisterComponent.propTypes = {
  navigate: PropTypes.func.isRequired,
  hSubmit: PropTypes.func.isRequired
};

export default RegisterComponent;
