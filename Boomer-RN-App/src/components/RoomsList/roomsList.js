import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Thumbnail,
  Text
} from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./roomslist.style";

const RoomsList = props => {
  const { roomsList } = props;
  return (
    <List style={{ marginRight: "5%" }}>
      {roomsList &&
        roomsList.map(room => (
          <ListItem thumbnail key={room.id} style={styles.listItem}>
            <Left style={{ borderWidth: 0 }}>
              <Thumbnail
                square
                large
                source={{ uri: room.imageURL }}
                style={styles.thumbNailStyle}
              />
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={styles.thumbNailTextStyle}>{room.difficulty}</Text>
            </Body>
            <Right style={{ borderBottomWidth: 0 }}>
              <Button transparent style={styles.thumbNailButtonStyle}>
                {/* <Text>View</Text> */}
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={30}
                  color="white"
                />
              </Button>
            </Right>
          </ListItem>
        ))}
    </List>
  );
};

RoomsList.propTypes = {
  roomsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired
    })
  ).isRequired
};

export default RoomsList;
