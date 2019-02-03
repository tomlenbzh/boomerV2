import React, { Component } from "react";
import { View, ImageBackground } from "react-native";
import PropTypes from "prop-types";
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";

import RankingComponent from "../../components/Ranking/ranking";

import { getTopScores } from "../../store/actions/scoresActions";

import styles from "./ranking.style";

export class Ranking extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  async componentDidMount() {
    this.props.getTopScores();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { scores } = this.props;

    return (
      <Container>
        <ImageBackground
          source={require("../../../assets/boomer-background.jpg")}
          style={styles.backgroundImage}
        >
          <Header style={styles.headerContent}>
            <Left style={styles.headerFlex}>
              <Button transparent onPress={() => navigate("Home")}>
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
              <Button transparent onPress={() => navigate("Profile")}>
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
              <RankingComponent scoreList={scores} imgsList={imgs} />
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.scores.scores,
  imgs: state.scores.imgs
});

const mapDispatchToProps = dispatch => ({
  getTopScores: () => dispatch(getTopScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ranking);
