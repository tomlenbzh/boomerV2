import React from "react";
import { Provider } from "react-redux";
import { createAppContainer, createStackNavigator } from "react-navigation";
import store from "./src/store/store";

// import { Authentication } from "./src/containers/Authentication/authentication";
import { Home } from "./src/containers/Home/home";
import { Profile } from "./src/containers/Profile/profile";
// import { Room } from "./src/containers/room";
// import { RoomGenerator } from "./src/containers/generator";
import { Ranking } from "./src/containers/Ranking/ranking";

const AppStackNavigator = createStackNavigator(
  {
    // Authentication: { screen: Authentication },
    Home: { screen: Home },
    Profile: { screen: Profile },
    // Room: { screen: Room },
    // Generator: { screen: RoomGenerator },
    Ranking: { screen: Ranking }
  },
  { headerMode: "none" }
);

const BoomerApp = createAppContainer(AppStackNavigator);

const App = () => (
  <Provider store={store}>
    <BoomerApp />
  </Provider>
);

export default App;
