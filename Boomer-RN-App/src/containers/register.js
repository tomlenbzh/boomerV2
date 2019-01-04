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
import RegisterComponent from '../components/register';

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

  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.state = {
      pseudo: '',
      password: '',
      password_confirmation: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  navigateTo(path) {
    this.props.navigation.navigate(path);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <View style={styles.registerContainer}>
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>Boomer</Text>
            </View>
            <RegisterComponent navigate={this.navigateTo} text="Un beau text"/>
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

const mapStateToProps = state => {
  state.auth.authError = null;
  return {
    registerError: state.auth.registerError,
    hasRegistered: state.auth.hasRegistered,
    auth: state.auth.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: credentials => dispatch(signUp(credentials))
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Register);

export default Register;
