import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Thumbnail, Text, Col } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./ranking.style";

const RankingComponent = props => {
  const { scoreList } = props;
  console.log("score : ", scoreList);
  return (
    <List>
      {scoreList &&
        scoreList.data.map(item => (
          <ListItem avatar noIndent style={styles.rankingItem} key={item.rank}>
            <Col>
              <Text style={styles.rankingPosition}>{item.rank}</Text>
            </Col>
            <Col>
              <Thumbnail
                source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cDQBqhVvItA9BEeuZiUOHuZaG661kx2anGilfNGuOYejjKfL"
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
  // scoreList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     position: PropTypes.string.isRequired,
  //     pseudo: PropTypes.string.isRequired,
  //     imageURL: PropTypes.string.isRequired,
  //     score: PropTypes.string
  //   })
  // ).isRequired
};

export default RankingComponent;
