import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import PlayScreen from "./screens/Play";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Play" component={PlayScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }