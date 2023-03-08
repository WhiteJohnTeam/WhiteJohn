import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorContext } from "../context/ColorContext";

export default function AboutScreen({ navigation}) {
  
  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  console.log("test?");
  //@ts-ignore
  const game = useSelector((state) => state.wjReducer.game);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const loadGame = async () => {
  //    await dispatch(newGame());
  //   };
  //   loadGame();
  // }, [dispatch]);

  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={styles.backgroundImage} source={isDarkMode ? require('../assets/home_WhiteJohn_dark.png') : require('../assets/home_WhiteJohn.png') } resizeMode='cover'>
          <View>
            <TouchableOpacity style={styles.buttonForm} onPress={() => navigation.navigate("Play")}> 
              <Text style={{fontSize: 24}}>Press anywhere to play</Text>     
            </TouchableOpacity> 
          </View>
        </ImageBackground>
      </View> 
    </SafeAreaView>
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

