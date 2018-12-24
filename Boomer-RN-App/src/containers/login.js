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

export class Login extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  constructor(props) {
    super(props);
    this.state = { loading: true };
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
            <Form style={styles.loginForm}>
              <Text style={styles.loginTitle}>Login</Text>
              <Item floatingLabel style={styles.loginInput}>
                <Label style={styles.loginLabel}>Username</Label>
                <Input style={styles.loginInputText} />
              </Item>
              <Item floatingLabel style={styles.loginInput}>
                <Label style={styles.loginLabel}>Password</Label>
                <Input style={styles.loginInputText} />
              </Item>
              <Button
                rounded
                style={styles.loginButton}
                onPress={() => navigate('Home')}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </Button>
            </Form>
          </View>
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button
              active
              style={styles.footerTabActive}
              onPress={() => navigate('Login')}
            >
              <Text>Login</Text>
            </Button>
            <Button onPress={() => navigate('Register')}>
              <Text>Register</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

export default Login;
