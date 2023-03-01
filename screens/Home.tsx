import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import  newGame  from '../redux/actions/newGame';

export default function HomeScreen({ navigation}) {
  
  // console.log("test?");
  // const game = useSelector((state) => state.wjReducer.game);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const loadGame = async () => {
  //    await dispatch(newGame());
  //   };
  //   loadGame();
  // }, [dispatch]);

  return (
      <View>
        <ImageBackground style={styles.backgroundImage} source={require('../assets/home_WhiteJohn.png')} resizeMode='cover'>
          <View>
            <TouchableOpacity style={styles.buttonForm} onPress={() => navigation.navigate("Play")}>
              
              <Text style={{fontSize: 24}}>Press anywhere to play</Text>     
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
    height: '120%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

