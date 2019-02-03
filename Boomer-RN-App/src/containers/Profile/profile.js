import React, { Component } from "react";
import { View, TouchableOpacity, ImageBackground, Image } from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import { ImagePicker } from "expo";
import * as firebase from "firebase";
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { signOut } from '../../store/actions/authenticationActions';

import styles from "./profile.style";

import { connect } from "react-redux";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null, isModalVisible: false };
    const firebaseConfig = {
      apiKey: "AIzaSyAZAVR-roKX-Xkvj-23NNSJ5QkgF2vBwx4",
      authDomain: "react-native-ecdfc.firebaseapp.com",
      databaseURL: "https://react-native-ecdfc.firebaseio.com",
      projectId: "react-native-ecdfc",
      storageBucket: "react-native-ecdfc.appspot.com",
      messagingSenderId: "400846912108"
    };
    if (!firebase.apps.length) {
      console.log("init Firebase");
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .storage()
      .ref(this.props.auth.data.pseudo)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({ image: url });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  static navigationOptions = {
    title: "Boomer"
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
      console.log(this.props.auth.data.pseudo);
      const uri = await this.uploadImage(
        result.uri,
        this.props.auth.data.pseudo
      );
      console.log(uri);
      this.setState({ image: uri });
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
    console.log("camera permission status : ", status + " + " + statusRoll);
  };

  async uploadImage(uri, imageName) {
    // console.log("uploadImage");
    // const response = await fetch(uri);
    // const blob = await response.blob();

    // var ref = firebase.storage().ref().child(imageName);
    // return ref.put(blob);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase
      .storage()
      .ref()
      .child(imageName);
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    return await snapshot.ref.getDownloadURL();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    let { image } = this.state;

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
            <View style={styles.profileContainer}>
              <Image
                source={{
                  uri: image
                    ? image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBy99Qq2D8P2rmXcJi-SzGvHN6M9xT0t3ss0v5k7by10ZukhTo"
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

              <View style={styles.passwordForm}>
                <Text style={styles.passwordFormTitle}>{auth.data.pseudo}</Text>
              </View>
            </View>
          </Content>
        </ImageBackground>
        <Button danger style={{ position: "absolute", bottom: 20, width: "90%", marginLeft: "5%", marginRight: "5%" }} onPress={() => this.props.signOut()}>
          <Text style={{ width: "100%", textAlign: "center" }}>Sign Out</Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.userData
});

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
