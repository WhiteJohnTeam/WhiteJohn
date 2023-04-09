import { createStackNavigator, Header } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import PlayScreen from "./screens/Play";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Accueil" screenOptions={{headerShown : false}}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Play" component={PlayScreen}/>
        </Stack.Navigator>
    )
  }