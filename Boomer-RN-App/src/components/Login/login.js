import React from "react";
import { Item, Label, Input, Button, Form, Text } from "native-base";
import PropTypes from "prop-types";

import styles from "./login.style";

const LoginComponent = props => {
  const { hChange, hSubmit, aError, text } = props;
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
        onPress={submit => hSubmit(submit, "login")}
      >
        <Text style={styles.loginButtonText}>{text}</Text>
      </Button>
      {aError !== null ? <Text>Auth Error</Text> : null}
    </Form>
  );
};

LoginComponent.propTypes = {
  hSubmit: PropTypes.func.isRequired,
  hChange: PropTypes.func.isRequired
};

export default LoginComponent;
