import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ImageBackground } from 'react-native';
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
  Text
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RoomsList from '../../components/RoomsList/roomsList';

import styles from './home.style';

import { getRooms } from '../../store/actions/roomsActions';
import { getUserData } from '../../store/actions/userActions';
import { setReload } from '../../store/actions/reloadActions';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.update = this.update.bind(this);
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

  update() {
    this.props.setReload(false);
    if (this.props.auth) {
      console.log('i Get ALl Rooms')
      this.props.getRooms();
      this.props.getUserData(this.props.auth.data.pseudo);
    } else {
      this.navigateTo('/Login');
    }
  }

  static navigationOptions = {
    title: 'Boomer'
  };

  navigateTo = (path, param = null) => {
    this.props.navigation.navigate(path, param);
  };

  render() {
    console.log("Home render");
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    // this.forceUpdate();
    const { navigate } = this.props.navigation;
    // console.log(this.props);
    const { rooms, auth, user, reload } = this.props;
    

    if (reload === true) {
      console.log("in reload render");
      this.update();
    };        


    let userInfo = null;
    if (auth && user) userInfo = user;
    else userInfo = auth.data;

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
                <Left>
                  <Button transparent>
                    <MaterialCommunityIcons
                      name="star-outline"
                      size={32}
                      color="white"
                    />
                    <Text style={styles.subHeadertext}>{userInfo.score}</Text>
                  </Button>
                </Left>
              </Col>
              <Col>
                <Body>
                  <Button transparent>
                    <MaterialCommunityIcons
                      name="thumb-down-outline"
                      size={32}
                      color="white"
                    />
                    <Text style={styles.subHeadertext}>{userInfo.defeat}</Text>
                  </Button>
                </Body>
              </Col>
              <Col>
                <Right>
                  <Button transparent onPress={() => navigate('Ranking')}>
                    <MaterialCommunityIcons
                      name="format-list-numbers"
                      size={32}
                      color="white"
                    />
                    <Text style={styles.subHeadertext}></Text>
                  </Button>
                </Right>
              </Col>
            </Grid>
          </View>

          <View style={styles.buttonPadding}>
            <Button rounded style={styles.genLinkButton}>
              <Text style={styles.genLinkButtonText}>
                Créez votre propre room !
                </Text>
            </Button>
          </View>

          <Content style={{ marginTop: 20 }}>
            <View>
              <RoomsList
                score={userInfo.score}
                roomsList={rooms}
                navigate={this.navigateTo}
              />
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.rooms,
  auth: state.auth.userData,
  user: state.user.userInfos,
  reload: state.reload.reload
  // scores: state.scores.scores
});

const mapDispatchToProps = dispatch => ({
  getRooms: () => dispatch(getRooms()),
  setReload: reload => dispatch(setReload(reload)),
  getUserData: pseudo => dispatch(getUserData(pseudo)),
  // getTopScores: () => dispatch(getTopScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
