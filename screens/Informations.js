import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function InformationScreen() {
  return (
    <SafeAreaView style={{flex: 1, margin: 5}}>
              
      <ScrollView style={{flex: 1}}>
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

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    margin: 20
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
    fontSize: 15
  }
  
});

