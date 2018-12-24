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
  Image,
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
import { Dimensions } from 'react-native';

const ScreenHeight = Dimensions.get('window').height;
// import { connect } from 'react-redux';

const styles = StyleSheet.create({
  headerTitle: {
    marginTop: '10%'
  },
  headerTitleText: {
    textAlign: 'center',
    fontSize: 50,
    color: '#FFF'
  },
  registerContainer: {
    height: ScreenHeight,
    backgroundColor: '#286baf'
  },
  registerTitle: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: '5%',
    color: '#FFFFFF'
  },
  registerInput: {
    width: '90%',
    marginRight: '10%'
  },
  registerLabel: {
    color: '#ed9019'
  },
  registerForm: {
    width: '90%',
    marginTop: '5%',
    paddingBottom: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    padding: '5%',
    backgroundColor: '#0e2f50',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ed9019'
  },
  registerButton: {
    width: '90%',
    marginTop: '10%',
    marginLeft: '5%',
    backgroundColor: '#1d344e',
    borderWidth: 1,
    borderColor: '#ed9019',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8
  },
  registerButtonText: {
    width: '100%',
    textAlign: 'center'
  },
  footer: {
    backgroundColor: '#0e2f50'
  },
  footerTabActive: {
    backgroundColor: '#0e2f50'
  }
});

export class Register extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <View style={styles.registerContainer}>
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>Boomer</Text>
            </View>
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
                onPress={() => navigate('Home')}
              >
                <Text style={styles.registerButtonText}>Register</Text>
              </Button>
            </Form>
          </View>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button onPress={() => navigate('Login')}>
              <Text>Login</Text>
            </Button>
            <Button
              active
              style={styles.footerTabActive}
              onPress={() => navigate('Register')}
            >
              <Text>Register</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default Register;
