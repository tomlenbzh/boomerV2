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
  Text
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { connect } from 'react-redux';

import RankingComponent from '../../components/Ranking/ranking';

import styles from './ranking.style';

export class Ranking extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  scoreList = [
    {
      position: '1',
      pseudo: 'tomlenbzh',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cDQBqhVvItA9BEeuZiUOHuZaG661kx2anGilfNGuOYejjKfL',
      score: '321'
    },
    {
      position: '2',
      pseudo: 'lalala',
      imageURL: 'https://images7.alphacoders.com/331/331512.jpg',
      score: '300'
    },
    {
      position: '3',
      pseudo: 'Hello',
      imageURL: 'https://www.wonderplugin.com/videos/demo-image0.jpg',
      score: '250'
    },
    {
      position: '4',
      pseudo: 'Test',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cDQBqhVvItA9BEeuZiUOHuZaG661kx2anGilfNGuOYejjKfL',
      score: '200'
    },
    {
      position: '5',
      pseudo: 'Naze',
      imageURL: 'https://images7.alphacoders.com/331/331512.jpg',
      score: '150'
    }
  ];

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

          <Content style={styles.contentStyle}>
            <View>
              <RankingComponent scoreList={this.scoreList} />
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default Ranking;
