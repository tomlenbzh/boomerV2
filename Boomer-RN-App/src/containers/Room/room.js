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
  Text,
  Footer,
  FooterTab
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './room.style';
// import { connect } from 'react-redux';

export class Room extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    const { navigate } = this.props.navigation;
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
                <Text style={styles.subHeadertext}>Hard</Text>
              </Col>
            </Grid>
          </View>

          <Content style={{ marginTop: 20 }}>
            <View />
          </Content>

          <Footer>
            <FooterTab style={styles.roomFooter}>
              <Col>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    marginTop: 10,
                    fontSize: 20
                  }}
                >
                  321 pts
                </Text>
              </Col>

              <Col>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    marginTop: 10,
                    fontSize: 20
                  }}
                >
                  2 left
                </Text>
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
