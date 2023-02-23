import React, { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ScrollView, Colors} from 'react-native';

export default function PlayScreen() {

  const { isDarkMode, toggleTheme } = useContext(ColorContext);

  const colors = [ 'blue', 'red', 'gold', 'green', 'purple']
  const letters = ["H", "S", "P", "D", "R"]

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#303030' : 'white',
    },
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
    scroll: {
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
  
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.dealer}>
          <Image source={require('../assets/dealer.png')}/>
        </View>      
        <View style={styles.middle}>
          <Text style={styles.text_middle}>YOUR CHOICE</Text>
        </View>
        <ScrollView horizontal={true} style={styles.scroll}>
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
  
