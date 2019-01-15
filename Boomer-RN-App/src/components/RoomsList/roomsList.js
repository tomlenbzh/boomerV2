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

const RoomsList = props => {
  const { roomsList } = props;
  return (
    <List style={{ marginRight: "5%" }}>
      {roomsList &&
        roomsList.map(room => (
          <ListItem thumbnail key={room.id}>
            <Left>
              <Thumbnail square source={{ uri: room.imageURL }} />
            </Left>
            <Body>
              <Text>{room.difficulty}</Text>
              <Text>Its time to build a difference</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
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
