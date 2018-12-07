// import React from "react";
import { createAppContainer ,createStackNavigator } from "react-navigation";
// import { StyleSheet, Text, View } from "react-native";

import { Home } from "./src/containers/home";
import { Login } from "./src/containers/login";
import { Register } from "./src/containers/register";
import { Profile } from "./src/containers/profile";
import { Room } from "./src/containers/room";
import { Generator } from "./src/containers/generator";
import { Ranking } from "./src/containers/ranking";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

const AppStackNavigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Register: { screen: Register },
  Profile: { screen: Profile },
  Room: { screen: Room },
  Generator: { screen: Generator },
  Ranking: { screen: Ranking }
});

// const App = () => (
//   <View style={styles.container}>
//     <Text>Hello World ! Bitches !</Text>
//   </View>
// );

const App = createAppContainer(AppStackNavigator);
export default App;
