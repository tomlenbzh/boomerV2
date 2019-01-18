import React, { Component } from 'react';
import { View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { ImagePicker } from 'expo';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './profile.style';

// import { connect } from 'react-redux';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null, isModalVisible: false };
  }

  static navigationOptions = {
    title: 'Boomer'
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _takePhoto = () => {
    this._getCameraPermission().then(async () => {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    });
  };

  _getCameraPermission = async () => {
    const { Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.log('camera permission status : ', status + ' + ' + statusRoll);
  };

  render() {
    const { navigate } = this.props.navigation;
    let { image } = this.state;

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
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: image
                    ? image
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBy99Qq2D8P2rmXcJi-SzGvHN6M9xT0t3ss0v5k7by10ZukhTo'
                }}
                style={styles.profilePictureStyle}
              />
              <Button
                primary
                onPress={this._pickImage}
                style={styles.profilePictureButtonStyleLeft}
              >
                <MaterialCommunityIcons
                  name="image-plus"
                  size={30}
                  color="white"
                />
              </Button>

              <Button
                primary
                onPress={this._takePhoto}
                style={styles.profilePictureButtonStyleRight}
              >
                <MaterialCommunityIcons name="camera" size={30} color="white" />
              </Button>
            </View>

            <View style={styles.passwordForm}>
              <Text style={styles.passwordFormTitle}>tomlenbzh</Text>
              <Button
                rounded
                style={styles.changePasswordButton}
                onPress={this._toggleModal}
              >
                <Text style={styles.changePasswordButtonText}>
                  Changez votre mot de passe
                </Text>
              </Button>

              <Modal isVisible={this.state.isModalVisible}>
                <View style={styles.modalContainer}>
                  <View>
                    <Text>Modifiez votre mot de passe</Text>

                    <Form style={styles.passwordForm}>
                      <Text style={styles.passwordTitle}>
                        Modifiez votre mot de passe
                      </Text>
                      <Item floatingLabel style={styles.passwordInput}>
                        <Label style={styles.passwordLabel}>
                          Nouveau mot de passe
                        </Label>
                        <Input style={styles.passwordInputText} id="" />
                      </Item>
                      <Item floatingLabel style={styles.passwordInput}>
                        <Label style={styles.passwordLabel}>Confirmation</Label>
                        <Input style={styles.passwordInputText} id="" />
                      </Item>
                      <Button rounded style={styles.passwordButton}>
                        <Text style={styles.passwordButtonText}>Valider</Text>
                      </Button>
                    </Form>
                    <TouchableOpacity
                      onPress={this._toggleModal}
                      style={styles.modalCloseButton}
                    >
                      <MaterialCommunityIcons
                        name="close"
                        size={40}
                        color="white"
                        style={styles.modalCloseIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = {};

export default Profile;
