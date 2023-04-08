import React, { useContext, useEffect, useState, useRef } from "react";
import { ColorContext } from "../context/ColorContext";
import { DealerContext } from "../context/DealerContext";
import { useDispatch, useSelector } from "react-redux";
import { Svg, SvgUri } from 'react-native-svg';

import { fetchCard } from "../redux/thunks/fetchCard";
import fetchDeck from "../redux/thunks/fetchDeck";
import { PlayerType } from "../classes/PlayerType";
import { fetchFour } from "../redux/thunks/fetchFour";
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, Modal, FlatList } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Game from "../classes/Game";
import restartGame from "../redux/actions/restartGame";
import { fetchAfterStand } from "../redux/thunks/dealerDrawUntilEnd";
import CardItemList from "../components/cardItemList";
import Card from "../classes/Card";
import { delay } from "@reduxjs/toolkit/dist/utils";

export default function PlayScreen({ navigation }) {
  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const { dealerName } = useContext(DealerContext);

  // start game pop-up and shuffling animation
  const [showModal, setShowModal] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  //@ts-ignore
  const { deckId, playerHand, dealerHand, gameEnded, gameWinner } = useSelector(state => state.wjReducer);
  const [game, setGame] = useState(new Game(deckId, playerHand, dealerHand)); // to update the game var each time state is updated

  /*
  * Faire des composants pour l'affichage des cartes,
  * delaerHand et playerHand.
  */

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

  const hit = async () => {
    try {
      // @ts-ignore
      await dispatch(fetchCard(PlayerType.Player, deckId));

    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    if (gameEnded) {
      setTimeout(() => {
        setShowModal(true);
        setShowAnimation(false);
      }, 3500);
    }
  }, [gameEnded]);

  const Start = async () => {
    try {
      await dispatch(restartGame())
      //@ts-ignore
      await dispatch(fetchFour(deckId));
      setTimeout(() => { }, 3500);
    } catch (error) {
      console.error("Error:", error);
    }
    // temps pour montrer l'annimation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowModal(false);
  }


  const Stand = async () => {
    try {
      // @ts-ignore
      await dispatch(fetchAfterStand(dealerHand, deckId));
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const renderCard = ({ item }) => {
    if (!item || !item.image) {
      return null;
    }
    const newImageUrl = item.image.replace(".svg", ".png");
    return  <View>
              <Image source={{uri: newImageUrl}} style={styles.card_image}/>
            </View> 
  };

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
      width: global.width / 2.5,
      height: global.height / 4,
      margin: 10,
    },
    dealer_name: {
      fontSize: 25,
      color: isDarkMode ? "white" : "#303030",
      maxWidth: global.width / 2 - 20,
    },

    card_image: {
      width: 70,
      height: 100,
    },

    middle: {
      alignItems: "center",
    },
    choice: {
      backgroundColor: isDarkMode ? "white" : "#303030",
      borderWidth: 2,
      borderRadius: 10,
      width: global.width / 1.2,
      height: global.height / 20,
      justifyContent: "center",
    },
    text_choice: {
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
      backgroundColor: isDarkMode ? "#303030" : "white",
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
    text_shuffle: {
      color: isDarkMode ? "white" : "#303030",
      alignSelf: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: global.width / 2,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: global.width / 5,
    },

    buttonOpen: {
      backgroundColor: '#34C924',
    },
    buttonClose: {
      backgroundColor: '#f44336',
    },
    textStyle: {
      color: "white",
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      color: isDarkMode ? "white" : "#303030",
      marginBottom: 15,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
    },
  });

  //Rendre l'image de la carte très floue : blurRadius={10}

  return (
    <SafeAreaView style={styles.play}>
      <Text>Deck id: {deckId}</Text>
      <Text>Game ended: {gameEnded}</Text>

      <View style={styles.dealer}>
        <Image
          style={styles.dealer_image}
          source={require("../assets/dealer.png")} />
        <Text style={styles.dealer_name}> {dealerName}</Text>
      </View>

      <View style={styles.middle}>
        <Text>Dealer:</Text>
        <CardItemList items={game.dealerHand} />
      </View>

      {/* Player's choices for each turn */}
      {/* HIT BUTTON * ----------------------------- */}
      <View style={styles.middle}>
        <TouchableOpacity style={styles.choice}
          onPress={() =>
            hit()}
        >
          <Text style={styles.text_choice}>HIT</Text>
        </TouchableOpacity>
        {/* STAND BUTTON * ----------------------------- */}
        <Text style={styles.text_middle}>Win Streak :</Text>
        <TouchableOpacity style={styles.choice}
          onPress={() =>
            Stand()
          }
        >

          <Text style={styles.text_choice}>STAND</Text>
        </TouchableOpacity>
      </View>
      

      {/* Display all of the player's cards */}
      <View style={styles.middle}>
        <Text>Player:</Text>
        <CardItemList items={game.playerHand} />
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
                <Text style={modalStyle.text_shuffle}>Shuffling...</Text>
                <Image source={require('../assets/deck_shuffle.gif')} style={{ width: 150, height: 80 }} />
              </View>
            ) : (
              <View>
                <Text style={modalStyle.modalText}>
                  {gameEnded && gameWinner === PlayerType.Dealer ?
                    (<Text>You lost! Better luck next time!</Text>) :
                    (gameEnded && gameWinner === PlayerType.Player ?
                      (<Text>Woohoo! You won! Keep up the good work!</Text>) :
                      (<Text>Ready to start?</Text>))}
                </Text>
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
                    }}
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
