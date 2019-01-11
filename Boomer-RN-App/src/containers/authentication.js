import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
import { signIn } from '../store/actions/authenticationActions';
import { signUp } from '../store/actions/authenticationActions';

import { Dimensions } from 'react-native';
import LoginComponent from '../components/login';
import RegisterComponent from '../components/register';

const ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerTitle: {
    marginTop: '10%'
  },
  headerTitleText: {
    textAlign: 'center',
    fontSize: 50,
    color: '#FFF'
  },
  loginContainer: {
    height: ScreenHeight,
    backgroundColor: '#286baf'
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
  loginInputText: {
    color: 'white'
  },
  loginLabel: {
    color: '#ed9019'
  },
  loginForm: {
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
  loginButton: {
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
  loginButtonText: {
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

export class Authentication extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };

  constructor(props) {
    super(props);
    this.renderComponent = this.renderComponent.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.state = {
      loading: true,
      pseudoLogin: '',
      passwordLogin: '',
      pseudoRegister: '',
      passwordRegister: '',
      currentComponent: '/Login'
    };
  }

  renderComponent(toRender) {
    console.log('component to render : ', toRender);
    if (toRender === '/Login') {
      this.setState(previousState => ({ currentComponent: '/Login' }));
    } else {
      this.setState(previousState => ({ currentComponent: '/Register' }));
    }
  }

  handleChangeSignUp = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleChangeSignIn = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitSignUp = e => {
    e.preventDefault();
    //this.props.signUp(this.state);
  };

  handleSubmitSignIn = e => {
    e.preventDefault();
    //this.props.signIp(this.state);
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
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Content>
          <View style={styles.loginContainer}>
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>Boomer</Text>
            </View>
            {this.state.currentComponent === '/Login' ? (
              <LoginComponent
                navigate={this.navigateTo}
                hSubmit={this.handleSubmitSignIn}
                hChange={this.handleChangeSignIn}
                text="Login"
              />
            ) : (
              <RegisterComponent
                navigate={this.navigateTo}
                hSubmit={this.handleSubmitSignUp}
                hChange={this.handleChangeSignUp}
                text="Register"
              />
            )}
          </View>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button
              onPress={() => {
                this.renderComponent('/Login');
              }}
            >
              <Text>Login</Text>
            </Button>
            <Button
              onPress={() => {
                this.renderComponent('/Register');
              }}
            >
              <Text>Register</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  state.auth.registerError = null;
  return {
    authError: state.auth.authError,
    auth: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
    signUp: credentials => dispatch(signUp(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
