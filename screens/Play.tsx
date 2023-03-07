import React, { useContext, useEffect, useState } from "react";
import { ColorContext } from "../context/ColorContext";
import { DealerContext } from "../context/DealerContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../redux/thunks/fetchCard";
import fetchDeck from "../redux/thunks/fetchDeck";
import { PlayerType } from "../classes/PlayerType";
import { fetchFour } from "../redux/thunks/fetchFour";
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Game from "../classes/Game";
import startGame from "../redux/actions/startGame";


export default function PlayScreen() {
  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const { dealerName } = useContext(DealerContext);

  const colors = ["blue", "red", "gold", "green", "purple"];
  const letters = ["H", "S", "P", "D", "R"];

  const { deckId, playerHand, dealerHand } = useSelector(state => state.wjReducer);
  const [game, setGame] = useState(new Game(deckId, playerHand, dealerHand)); // to update the game var each time state is updated


  const dispatch = useDispatch();

  useEffect(() => {
    const loadGame = async () => {
     await dispatch(fetchDeck());;
    };
    loadGame();
  }, [dispatch]);

  useEffect(() => {
    setGame(new Game(deckId, playerHand, dealerHand));
  }, [deckId, playerHand, dealerHand]);

  const playerDraw = async () => {
    try {
      await dispatch(fetchCard(PlayerType.Player, deckId));
      console.warn("what:", playerHand.length);
    } catch (error) {
      console.error("Error:", error);
    }
  }    

  const Start = async () => {
    try {
      await dispatch(fetchFour(deckId));
    } catch (error) {
      console.error("Error:", error);
    }
  } 

  const styles = StyleSheet.create({
    play: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: isDarkMode ? "#303030" : "white",
    },

    top: {
      justifyContent: "flex-start",
    },
    dealer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dealer_image: {
      width: global.width/2.5,
      height: global.height/4,
      margin: 10,
    },
    dealer_name: {
      fontSize: 25,
      color: isDarkMode ? "white" : "#303030",
      maxWidth: global.width/2 - 20,
    },

    middle: {
      alignItems: "center",
    },
    choice:{
      backgroundColor: isDarkMode ? "white" : "#303030",
      borderWidth: 2,
      borderRadius: 5,
      width: global.width/1.2,
      height: global.height/20,
      justifyContent: "center",
    },
    text_choice:{
      color: isDarkMode ? "#303030" : "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    text_middle: {
      fontSize: 16,
      color: isDarkMode ? "white" : "#303030",
    },

    down: {
      alignItems: "center",
    },
    text_down: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDarkMode ? "white" : "#303030",
    },
  });

//Rendre l'image de la carte très floue : blurRadius={10}

  return (
    <SafeAreaView style={styles.play}>
        <View style={styles.dealer}>
          <Image
            style={styles.dealer_image}
            source={require("../assets/dealer.png")}/>
          <Text style={styles.dealer_name}> {dealerName}</Text>
        </View>

        <View style={styles.middle}><Text  >Dealer: </Text></View>

        <View style={styles.middle}>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text_choice}>HIT</Text>
          </TouchableOpacity>
          <Text style={styles.text_middle}>Win Streak :</Text>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text_choice}>STAND</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.middle}>
          <Text>Player: </Text>
          {game.playerHand.map((card, index) => (
            <Text key={index}>
              {card.value} {card.suit}
              {index < game.playerHand.length - 1 ? ", " : ""}
            </Text>
          ))}
        </View>



        <View style={styles.down}>
          <Text style={styles.text_down}>YOUR HAND</Text>
        </View>
    </SafeAreaView>
  );
}

