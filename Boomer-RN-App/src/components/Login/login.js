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
          onChangeText={textPseudo => {
            hChange(textPseudo, "pseudoLogin");
          }}
        />
      </Item>
      <Item floatingLabel style={styles.loginInput}>
        <Label style={styles.loginLabel}>Password</Label>
        <Input
          secureTextEntry
          style={styles.loginInputText}
          id="passwordLogin"
          onChangeText={textPass => {
            hChange(textPass, "passwordLogin");
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
      {aError !== null ? (
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            color: "#781424",
            paddingTop: 20
          }}
        >
          Auth Error
        </Text>
      ) : null}
    </Form>
  );
};

LoginComponent.defaultProps = {
  aError: null
};

LoginComponent.propTypes = {
  hSubmit: PropTypes.func.isRequired,
  hChange: PropTypes.func.isRequired,
  aError: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default LoginComponent;
