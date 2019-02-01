import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  PanResponder
} from 'react-native';
import { connect } from 'react-redux';
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

import openSocket from 'socket.io-client';

const socket = openSocket("https://alexandremartins.net/");

export class Room extends Component {
  constructor(props) {
    super(props);
    this._clicked = this._clicked.bind(this);
    this.state = {
      click_X: undefined,
      click_Y: undefined,
      redirect: false,
      score: this.props.auth.data.score,
      players: 0
    };

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderMove: (event, gestureState) => {
        console.warn('Check Moves !', gestureState.moveX);
      }
    });

    socket.emit('joinRoom', {
      roomId: this.props.navigation.getParam('roomId'),
      userPseudo: this.props.auth.data.pseudo,
      userId: this.props.auth.data.id
    },
      console.log("emit join room : ", this.props.navigation.getParam('roomId') + " / " + this.props.auth.data.pseudo + " / " + this.props.auth.data.id)
    );

    socket.on('destroy', this.setRedirectToTrue);
    socket.on('score', this.updateScore);
    socket.on('players', this.updatePlayers);
  }

  componentWillUnmount() {
    const id = this.props.navigation.getParam('roomId');
    socket.emit('leaveRoom', { roomId: id }, console.log("emit leave room"));
  }

  updateScore = score => {
    // this.setState({
    //   ...this.state,
    //   score: score
    // });
    this.setState(previousState => ({ score: score }));
  };

  updatePlayers = players => {
    // this.setState({
    //   ...this.state,
    //   players: players
    // });
    this.setState(previousState => ({ players: players }));
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      this.props.navigation.navigate("Home");
    }
  };

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
    const { rooms, auth } = this.props;
    const roomId = this.props.navigation.getParam('roomId');
    const currentRoom = rooms.data.filter(room => room.id == roomId);

    function sendClick() {
      console.log("Hello")
      socket.emit('playerClick', {});
    }

    return (

      <Container>
        <View>{this.renderRedirect()}</View>
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
                <Text style={styles.subHeadertext}>{currentRoom[0].difficulty.title}</Text>
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
                  uri: currentRoom[0].difficulty.background
                }}
                style={styles.roomBackground}
              >
                <TouchableOpacity
                  // onPress={evt => this._clicked(evt)}
                  onPress={() => sendClick()}
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
                <Text style={styles.roomFooterCol}>{this.state.score}</Text>
              </Col>
              <Col>
                <Text style={styles.roomFooterCol}>{this.state.players}</Text>
              </Col>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms.rooms,
    auth: state.auth.userData
  };
};

export default connect(mapStateToProps)(Room);
