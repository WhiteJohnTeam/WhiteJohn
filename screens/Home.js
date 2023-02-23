import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';
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
      <View>
        <ImageBackground style={styles.backgroundImage} source={require('../assets/home_WhiteJohn.png')} resizeMode='cover'>
          <View>
            <TouchableOpacity style={styles.buttonForm} onPress={() => navigation.navigate("Play")}>
              <Text style={{fontSize: 10}}>Press anywhere to play</Text>     
            </TouchableOpacity> 
          </View>
        </ImageBackground>
      </View> 
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  buttonForm: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

