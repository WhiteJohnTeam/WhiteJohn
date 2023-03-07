import React, { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function InformationScreen() {
  
  const { isDarkMode, toggleTheme } = useContext(ColorContext);

  const styles = StyleSheet.create({
   
    container: {
      backgroundColor: isDarkMode ? '#303030' : 'white',
    },

    title: {
      flex: 1,
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'sans-serif-medium',
      margin: 20,
      color: isDarkMode ? 'white' : '#303030',
    },
    
    image: {
      flex: 1,
      width: 350,
      height: 350,
      alignSelf: 'center',
      borderRadius: 30
    },

    textDescription: {
      alignItems: 'center',
      textAlign: 'justify',
      margin: 10,
      fontSize: 15,
      color: isDarkMode ? 'white' : '#303030',
    }  
  });

  return (          
    <SafeAreaView>   
      <ScrollView style={styles.container}>
          <View>
            <View>
              <Image source={require('../assets/blackJack.png')} style={styles.image}/>
            </View>
            <Text style={styles.textDescription}>The origin of Blackjack is still debated; the most popular belief is that it 
              originated in French casinos around 1700 due to its mention in Cervantes’s novel 
              Don Quixote, which dates to the late 16th/early 17th century. Then, the game was 
              referred to as ‘Vingt-et-un’ which translates to 21 in French. Another belief is 
              that the Romans played this game or something similar using wooden blocks.
              {'\n\n'}During its popularisation in the 18th century, casinos and other gambling houses 
              started to offer ‘special bets’ to draw more people to the game. A notable special 
              bet is the 10:1 odds of a player having a Black Jack (the Jack of spades or clubs) 
              with an Ace. This is where the name we know today originated. Although, as casinos 
              gradually removed this special bet, the name Blackjack remained. </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}


