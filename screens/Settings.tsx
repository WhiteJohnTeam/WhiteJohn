import React, { useContext, useState } from 'react';
import { ColorContext } from '../context/ColorContext';
import { DealerContext } from '../context/DealerContext';

import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, Switch, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({ navigation }) {

  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const { dealerName, setDealerName } = useContext(DealerContext);
  const [text, setText] = useState<string>('');

  const switchColor = isDarkMode ? 'white' : '#303030'

  const LANGUAGE_LIST = [
    { id: '1', flag: require('../assets/french.png') },
    { id: '2', flag: require('../assets/english.png') },
    { id: '3', flag: require('../assets/brazil.png') },
  ];

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity>
        <Image source={item.flag}/>
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
      color: isDarkMode ? 'white' : '#303030',
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
          <View>
            <Icon name='moon' size={45} colro={switchColor}></Icon>
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
            onChangeText={newText => setText(newText)}
            onSubmitEditing={() => setDealerName(text)}
            value={text}   
            style={styles.input}
          />
        </View>
        
      </View>
  );
}