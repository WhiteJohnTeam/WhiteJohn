import React, { useContext, useEffect, useState, useRef } from "react";
import { ColorContext } from "../context/ColorContext";
import { DealerContext } from "../context/DealerContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../redux/thunks/fetchCard";
import fetchDeck from "../redux/thunks/fetchDeck";
import { PlayerType } from "../classes/PlayerType";
import { fetchFour } from "../redux/thunks/fetchFour";
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, Modal } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Game from "../classes/Game";

export default function PlayScreen({ navigation}) {
  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const { dealerName } = useContext(DealerContext);
  
  const [showModal, setShowModal] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  //@ts-ignore
  const { deckId, playerHand, dealerHand } = useSelector(state => state.wjReducer);
  const [game, setGame] = useState(new Game(deckId, playerHand, dealerHand)); // to update the game var each time state is updated


  const dispatch = useDispatch();

  useEffect(() => {
    const loadGame = async () => {
    //@ts-ignore
     await dispatch(fetchDeck());;
    };
    loadGame();
  }, [dispatch]);

  useEffect(() => {
    setGame(new Game(deckId, playerHand, dealerHand));
  }, [deckId, playerHand, dealerHand]);

  const playerDraw = async () => {
    try {
      //@ts-ignore
      await dispatch(fetchCard(PlayerType.Player, deckId));
      //console.warn("what:", playerHand.length);
    } catch (error) {
      console.error("Error:", error);
    }
  }    

  const Start = async () => {

    try {
      //@ts-ignore
      await dispatch(fetchFour(deckId));
    } catch (error) {
      console.error("Error:", error);
    }    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowModal(false);
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
      borderRadius: 10,
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

  const modalStyle = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: global.width/2,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: global.width/5,
    },

    buttonOpen: {
      backgroundColor: '#34C924',
    },
    buttonClose: {
      backgroundColor: '#f44336',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
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

        <View style={styles.middle}>
          <Text>Player: </Text>
          {game.dealerHand.map((card, index) => (
            <Text key={index}>
              {card.value} {card.suit}
              {index < game.dealerHand.length - 1 ? ", " : ""}
            </Text>
          ))}
        </View>

        {/* Player's choices for each round */}
        <View style={styles.middle}>
          <TouchableOpacity style={styles.choice}
          onPress={() => playerDraw()}
          >
            <Text style={styles.text_choice}>HIT</Text>
          </TouchableOpacity>
          <Text style={styles.text_middle}>Win Streak :</Text>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text_choice}>STAND</Text>
          </TouchableOpacity>
        </View>

        {/* Display all of the player's cards */}
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

        {/* Modal to start game */}
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={modalStyle.centeredView}>
            <View style={modalStyle.modalView}>
              {showAnimation ? (
                <View>
                  <Image source={require('../assets/shuffle_deck.gif')} style={{width: 170, height: 100}} />
                </View>
              ) : (
                <View>
                  <Text style={modalStyle.modalText}>Ready to start?</Text>
                  <View style={modalStyle.buttonContainer}>
                    
                    <TouchableOpacity
                      style={[modalStyle.button, modalStyle.buttonOpen]}
                      onPress={() => {
                        setShowAnimation(true);
                        Start();
                      }}
                    >
                      <Text style={modalStyle.textStyle}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[modalStyle.button, modalStyle.buttonClose]}
                      onPress={() => {
                        setShowModal(false);
                        navigation.navigate("Home")
                      } }
                    >
                      <Text style={modalStyle.textStyle}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
        </Modal>

    </SafeAreaView>
  );
}
