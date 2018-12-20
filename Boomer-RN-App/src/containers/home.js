import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { View } from "react-native";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  static navigationOptions = {};

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => navigate("Home")}>
                <Icon name="home" />
              </Button>
            </Left>
            <Body>
              <Title>Boomer</Title>
            </Body>
            <Button transparent onPress={() => navigate("Profile")}>
              <Icon name="menu" />
            </Button>
          </Header>
          <Content>
            <Text>Welcome on the home page</Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </View>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

export default Home;
