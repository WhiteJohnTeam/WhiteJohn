import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, margin: 5}}>
      
      {/* TITLE */}
      <View style={{flex: 0.15, alignItems: 'center'}}>
        <Text style={styles.title}>CHEAT SHEET</Text>
      </View>
    
      <ScrollView style={{flex: 1}}>
          <View>
            <Text style={styles.textDescription}>Casino games has been designed to make players lose in the long run. To make the best of the situation and increase players’ chances of winning the game, gamblers are always looking for various solutions to reduce the house edge. This is why the blackjack cheat sheet has become popular among players. By having the cheat sheet and knowing how to use it, you can easily increase your chances of winning if you are planning on playing a game against the dealer.</Text>
            <Image source={require('./assets/cheatSheet.png')} style={styles.image}/>
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
  
  textDescription: {
    alignItems: 'center',
    textAlign: 'justify',
    margin: 10,
    fontSize: 15
  },

  image: {
    flex: 1,
    width: 350,
    height: 530,
    alignSelf: 'center',
    borderRadius: 30
  }

});
