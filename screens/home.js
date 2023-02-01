import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.middle}>
        <Image source={require('./assets/logo_WhiteJohn.png')}/>
      <Text>Your BlackJack Companion</Text>
      <StatusBar style="auto" />
      </View>
      
      <View style={styles.down}>
        <TouchableOpacity style={styles.buttonForm}>
          <Icon name='play-sharp' size={20}></Icon>      
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  down: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonForm: {
    width: 80,
    height: 80,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    height: 20,
    width: 20,
  }
});

