import React from "react";
import { Item, Label, Input, Button, Form, Text } from "native-base";
import PropTypes from "prop-types";

import styles from "./register.style";

const RegisterComponent = props => {
  const { hChange, hSubmit, rError } = props;

  return (
    <Form style={styles.registerForm}>
      <Text style={styles.registerTitle}>Register</Text>
      <Item floatingLabel style={styles.registerInput}>
        <Label style={styles.registerLabel}>Username</Label>
        <Input
          style={styles.RegisterInputText}
          onChangeText={text => {
            hChange(text, "pseudoRegister");
          }}
        />
      </Item>
      <Item floatingLabel style={styles.registerInput}>
        <Label style={styles.registerLabel}>Password</Label>
        <Input
          style={styles.loginInputText}
          onChangeText={text => {
            hChange(text, "passwordRegister");
          }}
        />
      </Item>
      <Item floatingLabel style={styles.registerInput}>
        <Label style={styles.registerLabel}>Confirm password</Label>
        <Input
          style={styles.RegisterInputText}
          onChangeText={text => {
            hChange(text, "confirmpasswordRegister");
          }}
        />
      </Item>
      <Button
        rounded
        style={styles.registerButton}
        onPress={submit => hSubmit(submit, "register")}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </Button>
      {rError !== null ? <Text>Register Error</Text> : null}
    </Form>
  );
};

RegisterComponent.propTypes = {
  hSubmit: PropTypes.func.isRequired,
  hChange: PropTypes.func.isRequired,
  rError: PropTypes.string
};

export default RegisterComponent;
