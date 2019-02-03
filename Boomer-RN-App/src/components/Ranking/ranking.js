import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Text, Col } from "native-base";
import styles from "./ranking.style";

const RankingComponent = props => {
  const { scoreList } = props;
  return (
    <List>
      {scoreList &&
        scoreList.data.map(item => (
          <ListItem avatar noIndent style={styles.rankingItem} key={item.rank}>
            <Col>
              <Text style={styles.rankingPosition}>{item.rank}</Text>
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

RankingComponent.defaultProps = {
  scoreList: null
};

RankingComponent.propTypes = {
  scoreList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      pseudo: PropTypes.string,
      rank: PropTypes.number,
      score: PropTypes.number
    })
  )
};

export default RankingComponent;
