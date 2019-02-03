import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import * as AllActions from '../../store/actions/authenticationActions';

import LoginComponent from '../../components/Login/login';
import RegisterComponent from '../../components/Register/register';

import styles from './authentication.style';
import { bindActionCreators } from 'redux';

// Authentication.PropTypes = { }

export class Authentication extends Component {
  constructor(props) {
    super(props);
    this.renderComponent = this.renderComponent.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      loading: true,
      pseudoLogin: '',
      passwordLogin: '',
      pseudoRegister: '',
      passwordRegister: '',
      confirmpasswordRegister: '',
      currentComponent: '/Login'
    };
  }

  renderComponent(toRender) {
    if (toRender === '/Login') {
      this.setState(previousState => ({ currentComponent: '/Login' }));
    } else {
      this.setState(previousState => ({ currentComponent: '/Register' }));
    }
  }

  handleChange = (e, field) => {
    this.setState(previousState => ({ [field]: e }));
  };

  handleSubmit = (e, action) => {
    if (action === 'login') {
      const credentials = {
        pseudo: this.state.pseudoLogin,
        password: this.state.passwordLogin
      };
      this.props.signIn(credentials);
    }
    else {
      const credentials = {
        pseudo: this.state.pseudoRegister,
        password: this.state.passwordRegister,
        password_confirmation: this.state.confirmpasswordRegister
      };
      this.props.signUp(credentials);
    }
  };

  navigateTo(path) {
    this.props.navigation.navigate(path);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });
    this.setState({ loading: false });
    console.disableYellowBox = true;
  }

  render() {

    const { auth, hasRegistered, authError, registerError } = this.props;
    if (hasRegistered && !auth) { this.state.currentComponent = '/Login'; }
    if (auth) { this.navigateTo('Home'); }
    if (this.state.loading) { return <Expo.AppLoading />; }

    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../../assets/boomer-background.jpg')}
            style={styles.backgroundImage}
          >
            <View style={styles.loginContainer}>
              <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>Boomer</Text>
              </View>
              {this.state.currentComponent === '/Login' ? (
                <LoginComponent
                  hSubmit={this.handleSubmit}
                  hChange={this.handleChange}
                  aError={authError ? <p>{authError}</p> : null}
                  text="Login"
                />
              ) : (
                  <RegisterComponent
                    hSubmit={this.handleSubmit}
                    hChange={this.handleChange}
                    rError={registerError ? <p>{registerError}</p> : null}
                    text="Register"
                  />
                )}
            </View>
          </ImageBackground>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button
              onPress={() => {
                this.renderComponent('/Login');
              }}
            >
              <Text style={styles.footer}>Login</Text>
            </Button>
            <Button
              onPress={() => {
                this.renderComponent('/Register');
              }}
            >
              <Text style={styles.footer}>Register</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authError: state.auth.authError,
    registerError: state.auth.registerError,
    hasRegistered: state.auth.hasRegistered,
    auth: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(AllActions.signIn(credentials)),
    signUp: credentials => dispatch(AllActions.signUp(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
