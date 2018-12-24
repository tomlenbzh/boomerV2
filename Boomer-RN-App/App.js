import { createAppContainer, createStackNavigator } from "react-navigation";
import { Login } from "./src/containers/login";
import { Register } from "./src/containers/register";
import { Home } from "./src/containers/home";
import { Profile } from "./src/containers/profile";
import { Room } from "./src/containers/room";
import { RoomGenerator } from "./src/containers/generator";
import { Ranking } from "./src/containers/ranking";

const AppStackNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    Home: { screen: Home },
    Profile: { screen: Profile },
    Room: { screen: Room },
    Generator: { screen: RoomGenerator },
    Ranking: { screen: Ranking }
  },
  {
    headerMode: "none"
  }
);

const App = createAppContainer(AppStackNavigator);
export default App;
