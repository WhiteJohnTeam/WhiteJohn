import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ScrollView, Colors} from 'react-native';

export default function PlayScreen() {

  const colors = [ 'blue', 'red', 'gold', 'green', 'purple']
  const letters = ["H", "S", "P", "D", "R"]

  return (
      <SafeAreaView>
        <View style={styles.dealer}>
          <Image source={require('../assets/dealer.png')}/>
        </View>      
        <View style={styles.middle}>
          <Text style={styles.text_middle}>YOUR CHOICE</Text>
        </View>
        <ScrollView horizontal={true} style={styles.container}>
          {colors.map((color, index) => (
            <View key={index} style={[styles.button, { backgroundColor: color }]}>
              <TouchableOpacity >
                <Text style={styles.buttonText}>
                  {letters[index]}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={styles.down}> 
          <Image source={require('../assets/hands.png')}/>
        </View>
      </SafeAreaView>
    );
  } 
  
  const styles = StyleSheet.create({
    top: {
      justifyContent: 'flex-start',
    },
    dealer: {
      justifyContent: 'flex-end',
      flexDirection: 'row'
    },
    text_top: {
      fontSize: 20,
    },
    middle: {
      alignItems: 'center'
    },
    text_middle: {
      fontSize: 20,
    },
    down: {
      justifyContent: 'flex-end',
      alignItems: 'center'
    }, 
    container: {
      alignSelf: 'center',
      paddingTop: 20,
    },
    button: {
      height: 50,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });