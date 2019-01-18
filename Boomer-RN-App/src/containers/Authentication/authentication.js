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
    setTimeout(() => {
      console.log(this.state);
    }, 1000);
  };

  handleSubmit = (e, action) => {
    console.log('Action : ', action);
    if (action === 'login') {
      this.navigateTo("Home");
      const credentials = {
        pseudo: 'testLogin',
        password: '@testLogin'
      };
      console.log("props = ", this.props)
      // this.props.signIn(credentials);
    } else {
      const credentials = {
        pseudo: 'testRegister',
        password: '@testRegister'
      };
      this.props.signUp(credentials);
    }
  };

  navigateTo(path) {
    console.log('navigate to : ' + path);
    this.props.navigation.navigate(path);
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../../assets/boomer-background.jpg')}
            style={{ width: '100%', height: '100%' }}
          >
            <View style={styles.loginContainer}>
              <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>Boomer</Text>
              </View>
              {this.state.currentComponent === '/Login' ? (
                <LoginComponent
                  navigate={this.navigateTo}
                  hSubmit={this.handleSubmit}
                  hChange={this.handleChange}
                  text="Login"
                />
              ) : (
                <RegisterComponent
                  navigate={this.navigateTo}
                  hSubmit={this.handleSubmit}
                  hChange={this.handleChange}
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

const mapStateToProps = state => {
  //state.auth.registerError = null;
  return {
    //authError: state.auth.authError,
    auth: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => signIn(credentials)(dispatch),
    signUp: credentials => dispatch(signUp(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
