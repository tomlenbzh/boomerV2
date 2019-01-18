import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  PanResponder
} from 'react-native';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Footer,
  FooterTab
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './room.style';
// import { connect } from 'react-redux';

export class Room extends Component {
  constructor(props) {
    super(props);
    this._clicked = this._clicked.bind(this);
    this.state = {
      click_X: undefined,
      click_Y: undefined
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderMove: (event, gestureState) => {
        console.warn('Check Moves !', gestureState.moveX);
      }
    });
  }

  static propTypes = {
    // prop: PropTypes
  };

  _clicked = e => {
    const newCoord = {
      click_X: e.nativeEvent.locationX,
      click_Y: e.nativeEvent.locationY
    };
    this.setState(previousState => newCoord);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/boomer-background.jpg')}
          style={styles.backgroundImage}
        >
          <Header style={styles.headerContent}>
            <Left style={styles.headerFlex}>
              <Button transparent onPress={() => navigate('Home')}>
                <MaterialCommunityIcons
                  name="home-outline"
                  size={32}
                  color="white"
                />
              </Button>
            </Left>
            <Body style={styles.headerFlex}>
              <Text style={styles.headerTitleText}>Boomer</Text>
            </Body>
            <Right style={styles.headerFlex}>
              <Button transparent onPress={() => navigate('Profile')}>
                <MaterialCommunityIcons
                  name="account-convert"
                  size={30}
                  color="white"
                />
              </Button>
            </Right>
          </Header>

          <View style={styles.subHeader}>
            <Grid>
              <Col>
                <Text style={styles.subHeadertext}>Hard</Text>
              </Col>
            </Grid>
          </View>

          <Content contentContainerStyle={styles.contentStyle}>
            <View
              style={styles.roomContainer}
              {...this._panResponder.panHandlers}
            >
              <ImageBackground
                source={{
                  uri: 'https://media.giphy.com/media/EJDUScEsbFnUI/giphy.gif'
                }}
                style={styles.roomBackground}
              >
                <TouchableOpacity
                  onPress={evt => this._clicked(evt)}
                  style={styles.roomBackground}
                >
                  {this.state.click_X !== undefined && (
                    <Image
                      source={{
                        uri:
                          'https://vignette.wikia.nocookie.net/clubpenguin/images/3/3b/Bomb.png/revision/latest?cb=20130116012040'
                      }}
                      style={{
                        position: 'absolute',
                        left: this.state.click_X,
                        top: this.state.click_Y,
                        width: 50,
                        height: 50
                      }}
                    />
                  )}
                  <Text style={styles.roomText}>Click everywhere !</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </Content>

          <Footer>
            <FooterTab style={styles.roomFooter}>
              <Col>
                <Text style={styles.roomFooterCol}>321 pts</Text>
              </Col>
              <Col>
                <Text style={styles.roomFooterCol}>2 left</Text>
              </Col>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default Room;
