import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../StackNavigation';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={styles.backgroundImage} source={require('../assets/home_WhiteJohn.png')} resizeMode='cover'>
          <View>
            <TouchableOpacity style={styles.buttonForm} /*onPress={() => navigation.navigate("Play")}*/>
              <Icon name='play-circle-outline' size={80}></Icon>      
            </TouchableOpacity> 
          </View>
        </ImageBackground>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: `100%`,
    height: `100%`,
  },
  buttonForm: {
    height: '110%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// export const CARD_LIST : Card[] = [
//   new Card(1,7,"hearts",""),
//   new Card(2,8,"hearts",""),
//   new Card(3,9,"hearts",""),
// ]

