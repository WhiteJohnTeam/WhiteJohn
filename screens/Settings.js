import React, { useContext } from 'react';
import { useState } from 'react';
import { ColorContext } from '../context/ColorContext';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, SafeAreaView, Switch, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen() {

  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const [text, setText] = useState('');

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  const LANGUAGE_LIST = [
    { id: '1', flag: require('../assets/french.png') },
    { id: '2', flag: require('../assets/english.png') },
    { id: '3', flag: require('../assets/brazil.png') },
  ];

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.item}>
        <Image source={item.flag} style={styles.image} />
      </TouchableOpacity>    
    </View>
  );

  const styles = StyleSheet.create({
    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
  
    settingRow2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
  
    options: {
      height: '100%',
      backgroundColor: isDarkMode ? '#303030' : 'white',
    },
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: isDarkMode ? '#303030' : 'white',
    },
  });

  return (
      <View style={styles.options}>

        <View style={styles.settingRow}>
          <Icon name='globe-outline' size={50}></Icon>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: isDarkMode ? 'white' : '#303030'}}>Language</Text>
          <Switch />
        </View>

        <View>
          <FlatList
            horizontal={true}
            data={LANGUAGE_LIST}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.iconDecoration}>
            <Icon name='moon' size={45}></Icon>
          </View>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: isDarkMode ? 'white' : '#303030'}}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>

        <View style={styles.settingRow}>
          <Icon name='information-circle-outline' size={50}></Icon>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: isDarkMode ? 'white' : '#303030'}}>About us</Text>
          <Switch></Switch>
        </View>

        <View style={styles.settingRow2}>
          <Icon name='pencil' size={50}></Icon>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: isDarkMode ? 'white' : '#303030'}}>Name your dealer</Text>
        </View>
        
        <View>
          <TextInput
            placeholder="Choose the name of your dealer..."
            onChangeText={onChangeText}
            value={text}
            style={styles.input}
          />
        </View>
        
      </View>
  );
}
