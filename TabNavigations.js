import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import CheatSheetScreen from './screens/Cheatsheet';
import SettingsScreen from './screens/Settings';
import InformationScreen from './screens/Informations';
import PlayScreen from './screens/Play';



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
        <NavigationContainer theme={isDarkMode ? DarkTheme : ColorTheme}>
            <BottomTabNavigator.Navigator initialRouteName="Home"
                tabBarOptions={{
                activeTintColor: isDarkMode ? 'green' : 'green',
                inactiveTintColor: isDarkMode ? 'white' : '#303030',
                }}>
                <BottomTabNavigator.Screen name="Home" component={StackNavigation}
                            options={{
                                title: 'Home',
                                tabBarIcon: ({color}) => <Icon name="home" color={color}/>,
                            }}/>
                <BottomTabNavigator.Screen name="Info" component={InformationScreen}
                            options={{
                                title: 'BlackJack',
                                tabBarIcon: ({color}) => <Icon name="md-cash" color={color}/>,
                            }}/>
                <BottomTabNavigator.Screen name="CheatSheet" component={CheatSheetScreen}
                            options={{
                                title: 'CheatSheet',
                                tabBarIcon: ({color}) => <Icon name="document" color={color}/>,
                            }}/>
                <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                            options={{
                                title: 'Settings',
                                tabBarIcon: ({color}) => <Icon name="settings" color={color}/>,
                            }}/>

                </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )

    function TabBarIcon(props) {
        return <Icon size={30} {...props} />;
    }
}
