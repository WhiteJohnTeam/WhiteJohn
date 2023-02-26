import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useContext } from 'react';
import { ColorContext } from './context/ColorContext';
import StackNavigation from './StackNavigation';


// Screens
import CheatSheetScreen from './screens/Cheatsheet';
import SettingsScreen from './screens/Settings';
import InformationScreen from './screens/Informations';



export default function Navigation() {

    const { isDarkMode, toggleTheme } = useContext(ColorContext);

    const ColorTheme = {
        dark: isDarkMode,
        colors: {
          ...DefaultTheme.colors,
        },
    };

    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer theme={ColorTheme}>
          <BottomTabNavigator.Navigator initialRouteName="Home"

            /* not working
            tabBarOptions={{
              activeTintColor: isDarkMode ? 'green' : 'green',
              inactiveTintColor: isDarkMode ? 'white' : '#303030',
            }}*/>

            <BottomTabNavigator.Screen
              name="Home"
              component={StackNavigation}
              options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
              }}
            />
            <BottomTabNavigator.Screen
              name="Info"
              component={InformationScreen}
              options={{
                title: 'BlackJack',
                tabBarIcon: ({ color }) => <Icon name="md-cash" color={color} />,
              }}
            />
            <BottomTabNavigator.Screen
              name="CheatSheet"
              component={CheatSheetScreen}
              options={{
                title: 'CheatSheet',
                tabBarIcon: ({ color }) => <Icon name="document" color={color} />,
              }}
            />
            <BottomTabNavigator.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                title: 'Settings',
                tabBarIcon: ({ color }) => <Icon name="settings" color={color} />,
              }}
            />
          </BottomTabNavigator.Navigator>
        </NavigationContainer>
      );
}
