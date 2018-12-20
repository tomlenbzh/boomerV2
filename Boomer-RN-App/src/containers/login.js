import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Card,
  CardItem,
  Item,
  Label,
  Input,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Form,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
// import { connect } from 'react-redux';
import { Dimensions } from 'react-native'

const ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: 'center' /* Pas appliqué ! WTF ? */
  },
  loginContainer: {
    height : ScreenHeight,
    // flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'blue' /* Taille du container ? Full Size ! */
  },
  loginTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: '5%',
    color: '#FFFFFF'
  },
  loginInput: {
    width: '90%',
    marginRight: '10%'
  },
  loginForm: {
    width: '90%',
    // height: 250,
    marginTop: '10%',
    paddingBottom: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#16202c',
    borderRadius: 10,
    borderColor: '#ed9019'
  },
  loginButton: {
    width: '90%',
    marginTop: '10%',
    marginLeft: '5%',
  },
  loginTextButton: {
    width: '100%',
  }
});

export class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={styles.headerTitle}>Boomer</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.loginContainer}>
            <Form style={styles.loginForm}>
              <Text style={styles.loginTitle}>
                Login
              </Text>
              <Item floatingLabel style={styles.loginInput}>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.loginInput}>
                <Label>Password</Label>
                <Input />
              </Item>
              <Button rounded style={styles.loginButton}>
                <Text style={styles.loginTextButton}>Login</Text>
              </Button>
            </Form>
          </View>
        </Content>

      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

export default Login;
