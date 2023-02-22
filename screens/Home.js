import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';
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
