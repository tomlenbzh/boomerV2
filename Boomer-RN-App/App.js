import { createAppContainer, createStackNavigator } from "react-navigation";
import { Authentication } from "./src/containers/authentication";
import { Home } from "./src/containers/home";
import { Profile } from "./src/containers/profile";
import { Room } from "./src/containers/room";
import { RoomGenerator } from "./src/containers/generator";
import { Ranking } from "./src/containers/ranking";

const AppStackNavigator = createStackNavigator(
  {
    Authentication: { screen: Authentication },
    Home: { screen: Home },
    Profile: { screen: Profile },
    Room: { screen: Room },
    Generator: { screen: RoomGenerator },
    Ranking: { screen: Ranking }
  },
  { headerMode: "none" }
);

const App = createAppContainer(AppStackNavigator);
export default App;
