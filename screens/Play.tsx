import React, { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
import { DealerContext } from "../context/DealerContext";
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function PlayScreen() {
  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const { dealerName } = useContext(DealerContext);

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
        <View style={styles.middle}>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text_choice}>HIT</Text>
          </TouchableOpacity>
          <Text style={styles.text_middle}>Win Streak :</Text>
          <TouchableOpacity style={styles.choice}>
            <Text style={styles.text_choice}>STAND</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.down}>
          <Text style={styles.text_down}>YOUR HAND</Text>
        </View>
    </SafeAreaView>
  );
}
