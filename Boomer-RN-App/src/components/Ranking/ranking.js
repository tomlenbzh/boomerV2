import React from "react";
import PropTypes from "prop-types";
// import { Col } from "react-native";
import { List, ListItem, Thumbnail, Text, Col } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./ranking.style";

const RankingComponent = props => {
  const { scoreList } = props;
  return (
    <List>
      {scoreList &&
        scoreList.map(item => (
          <ListItem
            avatar
            noIndent
            style={styles.rankingItem}
            key={item.position}
          >
            <Col>
              <Text style={styles.rankingPosition}>{item.position}</Text>
            </Col>
            <Col>
              <Thumbnail
                source={{ uri: item.imageURL }}
                style={styles.rankingThumbnail}
              />
            </Col>
            <Col>
              <Text style={styles.rankingText}>{item.pseudo}</Text>
            </Col>
            <Col>
              <Text style={styles.rankingText}>{item.score}</Text>
            </Col>
          </ListItem>
        ))}
    </List>
  );
};
RankingComponent.propTypes = {
  scoreList: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
      pseudo: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      score: PropTypes.string
    })
  ).isRequired
};

export default RankingComponent;
