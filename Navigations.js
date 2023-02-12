import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './screens/Home';
import CheatSheetScreen from './screens/Cheatsheet';
import SettingsScreen from './screens/Settings';
import Information from './screens/Informations';
import InformationScreen from './screens/Informations';



export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                            options={{
                                                title: 'Home',
                                            }}/>
                <BottomTabNavigator.Screen name="CheatSheet" component={CheatSheetScreen}
                            options={{
                                title: 'CheatSheet',
                            }}/>
                <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                            options={{
                                title: 'Settings',
                            }}/>
                <BottomTabNavigator.Screen name="Info" component={InformationScreen}
                            options={{
                                title: 'BlackJack',
                            }}/>
                </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}