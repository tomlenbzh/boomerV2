import React, { Component } from 'react';
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
  Label,
  Text
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import RoomsList from '../../components/RoomsList/roomsList';

import styles from './home.style';

// import { connect } from 'react-redux';

export class Home extends Component {
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

  static navigationOptions = {
    title: 'Boomer'
  };

  roomsList = [
    {
      id: '1',
      difficulty: 'Hard',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cDQBqhVvItA9BEeuZiUOHuZaG661kx2anGilfNGuOYejjKfL'
    },
    {
      id: '2',
      difficulty: 'Extreme',
      imageURL: 'https://images7.alphacoders.com/331/331512.jpg'
    },
    {
      id: '3',
      difficulty: 'Hard',
      imageURL: 'https://www.wonderplugin.com/videos/demo-image0.jpg'
    },
    {
      id: '4',
      difficulty: 'Hard',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cDQBqhVvItA9BEeuZiUOHuZaG661kx2anGilfNGuOYejjKfL'
    },
    {
      id: '5',
      difficulty: 'Extreme',
      imageURL: 'https://images7.alphacoders.com/331/331512.jpg'
    },
    {
      id: '6',
      difficulty: 'Hard',
      imageURL: 'https://www.wonderplugin.com/videos/demo-image0.jpg'
    },
    {
      id: '7',
      difficulty: 'Hard',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cDQBqhVvItA9BEeuZiUOHuZaG661kx2anGilfNGuOYejjKfL'
    },
    {
      id: '8',
      difficulty: 'Extreme',
      imageURL: 'https://images7.alphacoders.com/331/331512.jpg'
    },
    {
      id: '9',
      difficulty: 'Hard',
      imageURL: 'https://www.wonderplugin.com/videos/demo-image0.jpg'
    }
  ];

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <ImageBackground
          source={require('../../../assets/boomer-background.jpg')}
          style={{ width: '100%', height: '100%' }}
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
                    <Text style={styles.subHeadertext}>50</Text>
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
                    <Text style={styles.subHeadertext}>10</Text>
                  </Button>
                </Body>
              </Col>
              <Col>
                <Right>
                  <Button transparent onPress={() => navigate('Ranking')}>
                    <MaterialCommunityIcons
                      name="trophy-outline"
                      size={32}
                      color="white"
                    />
                    <Text style={styles.subHeadertext}>1</Text>
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
              <RoomsList roomsList={this.roomsList} />
            </View>
          </Content>

          {/* <Footer>
            <FooterTab>
              <Button full />
            </FooterTab>
          </Footer> */}
        </ImageBackground>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

export default Home;
