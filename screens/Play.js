import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView} from 'react-native';

export default function PlayScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.middle}>
        <Text>PLAY</Text>
      <StatusBar style="auto" />
      </View>
      
    </SafeAreaView>
  );
}