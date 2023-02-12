import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { newGame } from '../redux/actions/newGame';

export default function HomeScreen() {
  
  console.log("test?");
  const game = useSelector(state => state.appReducer.game);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadGame = async () => {
      await dispatch(newGame());
    };
    loadGame();
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.middle}>
        <Image source={require('../assets/logo_WhiteJohn.png')}/>
      <Text>Your BlackJack Companion</Text>
      <StatusBar style="auto" />
      </View>
      
      <View style={{marginTop: 50}}>
        {game ? <Text>{game.deckId}</Text> : <Text>Loading...</Text>}
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

// export const CARD_LIST : Card[] = [
//   new Card(1,7,"hearts",""),
//   new Card(2,8,"hearts",""),
//   new Card(3,9,"hearts",""),
// ]

