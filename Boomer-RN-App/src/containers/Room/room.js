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
import { setReload } from '../../store/actions/reloadActions';

import styles from './room.style';
// import { connect } from 'react-redux';

import openSocket from 'socket.io-client';

const socket = openSocket("https://alexandremartins.net/", { jsonp: false, transports: ['websocket'] });

export class Room extends Component {
  constructor(props) {
    super(props);
    this._clicked = this._clicked.bind(this);
    this.state = {
      click_X: undefined,
      click_Y: undefined,
      redirect: false,
      score: this.props.navigation.getParam('userScore'),
      players: 0
    };

    this.setState(previousState => ({ score : this.props.navigation.getParam('userScore') }));
    const roomId = this.props.navigation.getParam('roomId');
    this.currentRoom = this.props.rooms.data.filter(room => room.id == roomId);

    console.log(this.state.score);

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderMove: (event, gestureState) => {
        console.warn('Check Moves !', gestureState.moveX);
      }
    });
    console.log("joinRoom")
    socket.emit('joinRoom', {
      roomId: this.props.navigation.getParam('roomId'),
      userPseudo: this.props.auth.data.pseudo,
      userId: this.props.auth.data.id
    },
      console.log(this.props.navigation.getParam('roomId'),
      this.props.auth.data.pseudo,
      this.props.auth.data.id)
    );

    socket.on('destroy', this.destroy);
    socket.on('score', this.updateScore);
    socket.on('players', this.updatePlayers);
  }

  destroy = () => {
    const id = this.props.navigation.getParam('roomId');
    console.log("leaveRoom")
    socket.emit('leaveRoom', { roomId: id });
    this.props.setReload(true);
    this.props.navigation.navigate('Home');    
  }

  leave(path) {
    const id = this.props.navigation.getParam('roomId');
    console.log("leaveRoom")
    socket.emit('leaveRoom', { roomId: id });
    this.props.setReload(true);
    this.props.navigation.navigate(path);
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

    function sendClick() {
      console.log("playerClick")
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
              <Button transparent onPress={() => this.leave('Home')}>
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
              <Button transparent onPress={() => this.leave('Profile')}>
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
                <Text style={styles.subHeadertext}>{this.currentRoom[0].difficulty.title}</Text>
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
                  uri: this.currentRoom[0].difficulty.background
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

const mapDispatchToProps = dispatch => ({
  setReload: reload => dispatch(setReload(reload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);
