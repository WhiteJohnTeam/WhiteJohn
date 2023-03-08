import { createStackNavigator, Header } from "@react-navigation/stack";
import AboutScreen from "./screens/About";
import HomeScreen from "./screens/Home";
import PlayScreen from "./screens/Play";
import SettingsScreen from "./screens/Settings";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Play" component={PlayScreen}/>
        </Stack.Navigator>
    )
  }