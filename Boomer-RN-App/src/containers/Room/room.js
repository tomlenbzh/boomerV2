import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  PanResponder,
  Animated,
  ScrollView
} from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from 'native-base';
import styles from './room.style';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { setReload } from '../../store/actions/reloadActions';
import openSocket from 'socket.io-client';

const socket = openSocket("https://alexandremartins.net/", { jsonp: false, transports: ['websocket'] });
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export class Room extends Component {
  constructor(props) {
    super(props);
    this._clicked = this._clicked.bind(this);
    this.state = {
      click_X: undefined,
      click_Y: undefined,
      redirect: false,
      score: this.props.navigation.getParam('userScore'),
      players: 0,
      isScrollEnabled: false
    };

    this.setState(previousState => ({ score: this.props.navigation.getParam('userScore') }));
    const roomId = this.props.navigation.getParam('roomId');
    this.currentRoom = this.props.rooms.data.filter(room => room.id == roomId);

    socket.emit('joinRoom', {
      roomId: this.props.navigation.getParam('roomId'),
      userPseudo: this.props.auth.data.pseudo,
      userId: this.props.auth.data.id
    });

    socket.on('destroy', this.destroy);
    socket.on('score', this.updateScore);
    socket.on('players', this.updatePlayers);
  }

  destroy = () => {
    const id = this.props.navigation.getParam('roomId');
    socket.emit('leaveRoom', { roomId: id });
    this.props.setReload(true);
    this.props.navigation.navigate('Home');
  }

  leave(path) {
    const id = this.props.navigation.getParam('roomId');
    socket.emit('leaveRoom', { roomId: id });
    this.props.setReload(true);
    this.props.navigation.navigate(path);
  }

  updateScore = score => {
    this.setState(previousState => ({ score: score }));
  };

  updatePlayers = players => {
    this.setState(previousState => ({ players: players }));
  };

  renderRedirect = () => {
    if (this.state.redirect) this.props.navigation.navigate("Home");
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

  componentWillMount() {

    this.scrollOffset = 0
    this.animation = new Animated.ValueXY({ x: 0, y: SCREEN_HEIGHT - 100 });
    this.panResponder = PanResponder.create({

      onMoveShouldSetPanResponder: (evt, gestureState) => {
        if ((this.state.isScrollEnabled && this.scrollOffset <= 0 && gestureState.dy > 0) || !this.state.isScrollEnabled && gestureState.dy < 0) {
          return true
        } else {
          return false
        }
      },
      onPanResponderGrant: (evt, gestureState) => {
        this.animation.extractOffset()
      },
      onPanResponderMove: (evt, gestureState) => {
        this.animation.setValue({ x: 0, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.moveY > SCREEN_HEIGHT - 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }
        else if (gestureState.moveY < 120) {
          Animated.spring(this.animation.y, {
            toValue: 0,
            tension: 1
          }).start()
        }
        else if (gestureState.dy < 0) {
          this.setState({ isScrollEnabled: true })

          Animated.spring(this.animation.y, {
            toValue: -SCREEN_HEIGHT + 120,
            tension: 1
          }).start()
        }
        else if (gestureState.dy > 0) {
          this.setState({ isScrollEnabled: false })
          Animated.spring(this.animation.y, {
            toValue: SCREEN_HEIGHT - 120,
            tension: 1
          }).start()
        }
      }
    });
  }

  render() {
    const animatedHeight = {
      transform: this.animation.getTranslateTransform()
    }

    animatedImageHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [0, 90],
      extrapolate: "clamp"
    });
    animatedSongTitleOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });
    animatedImageMarginLeft = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_WIDTH / 2 - 100, 10],
      extrapolate: "clamp"
    });
    animatedHeaderHeight = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: [SCREEN_HEIGHT / 2, 90],
      extrapolate: "clamp"
    });
    animatedSongDetailsOpacity = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 90],
      outputRange: [1, 0, 0],
      extrapolate: "clamp"
    });
    animatedBackgroundColor = this.animation.y.interpolate({
      inputRange: [0, SCREEN_HEIGHT - 90],
      outputRange: ['rgba(0,0,0,0.5)', 'white'],
      extrapolate: "clamp"
    });

    const { navigate } = this.props.navigation;
    const { rooms, auth } = this.props;
    const roomId = this.props.navigation.getParam('roomId');

    function sendClick() {
      socket.emit('playerClick', {});
    }

    return (
      <Container>
        <View>{this.renderRedirect()}</View>
        <Animated.View style={{ flex: 1, backgroundColor: animatedBackgroundColor }}>
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
              <View style={styles.roomContainer}>
                <ImageBackground
                  source={{ uri: this.currentRoom[0].difficulty.background }} style={styles.roomBackground} >
                  <TouchableOpacity
                    onPress={(e) => {
                      this._clicked(e);
                      sendClick();
                    }}
                    style={styles.roomBackground}
                  >
                    {this.state.click_X !== undefined && (
                      <Image
                        source={{
                          uri: "https://vignette.wikia.nocookie.net/clubpenguin/images/3/3b/Bomb.png/revision/latest?cb=20130116012040"
                        }}
                        style={{
                          position: 'absolute',
                          width: 50,
                          height: 50,
                          left: this.state.click_X - 25,
                          top: this.state.click_Y - 25,
                        }}
                      />
                    )}
                    <Text style={styles.roomText}>Click everywhere !</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            </Content>

            <Animated.View
              {... this.panResponder.panHandlers}
              style={[animatedHeight, { position: 'absolute', left: 0, right: 0, zIndex: 10, backgroundColor: '#0e2f50', height: SCREEN_HEIGHT }]}

            >
              <ScrollView
                scrollEnabled={this.state.isScrollEnabled}
                scrollEventThrottle={16}
                onScroll={event => {
                  this.scrollOffset = event.nativeEvent.contentOffset.y
                }}
              >
                <Animated.View
                  style={{ height: animatedImageHeight, borderTopWidth: 2, borderTopColor: '#ed9019', flexDirection: 'row', alignItems: 'center' }}
                >
                  <View style={{ justifyContent: 'center', flexDirection: 'row', flex: 1, paddingLeft: 15, paddingRight: 15 }}>
                    <Left>
                      <View style={{ flexDirection: 'row' }}>
                        <Animated.Text style={{ opacity: animatedSongTitleOpacity, fontSize: 18, paddingLeft: 10, color: "white" }}>
                          Score : {this.state.score}
                        </Animated.Text>
                      </View>
                    </Left>
                    <Right>
                      <View style={{ flexDirection: 'row' }}>
                        <Animated.Text style={{ opacity: animatedSongTitleOpacity, fontSize: 18, paddingLeft: 10, color: "white" }}>
                          {this.state.players} joueurs
                      </Animated.Text>
                      </View>
                    </Right>
                  </View>
                </Animated.View>

                <Animated.View style={{ height: animatedHeaderHeight, opacity: animatedSongDetailsOpacity, margin: 15 }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 25, marginBottom: 20, color: "white" }}>Difficulté : {this.currentRoom[0].difficulty.title}</Text>
                    <Text style={{ fontSize: 25, marginBottom: 20, color: "white" }}>Votre score actuel : {this.state.score}</Text>
                    <Text style={{ fontSize: 25, marginBottom: 20, color: "white" }}>{this.state.players} joueurs dans la room</Text>
                    <Text style={{ fontSize: 15, marginBottom: 20, color: "white", textAlign: "center" }}>{this.currentRoom[0].difficulty.description}</Text>
                  </View>
                </Animated.View>

              </ScrollView>
            </Animated.View>
          </ImageBackground>
        </Animated.View>
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
