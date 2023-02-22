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
  backgroundImage: {
    width: `100%`,
    height: `100%`,
  },
  buttonForm: {
    height: '110%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

