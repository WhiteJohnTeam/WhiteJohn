import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorContext } from '../context/ColorContext';

export default function CheatSheetScreen() {

  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  
  const styles = StyleSheet.create({
    
    container: {
      backgroundColor: isDarkMode ? '#303030' : 'white',
    },

    textDescription: {
      alignItems: 'center',
      textAlign: 'justify',
      margin: 10,
      fontSize: 15,
      color: isDarkMode ? 'white' : '#303030',
    },

    image: {
      flex: 1,
      width: 350,
      height: 530,
      alignSelf: 'center',
      borderRadius: 30
    }

  });

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
          <View>
            <Text style={styles.textDescription}>Casino games has been designed to make players lose in the long run. To make the best of the situation and increase players’ chances of winning the game, gamblers are always looking for various solutions to reduce the house edge. This is why the blackjack cheat sheet has become popular among players. By having the cheat sheet and knowing how to use it, you can easily increase your chances of winning if you are planning on playing a game against the dealer.</Text>
            <Image source={require('../assets/cheatSheet.png')} style={styles.image}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}


