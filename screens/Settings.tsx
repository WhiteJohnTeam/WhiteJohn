import React, { useContext, useState } from 'react';
import { ColorContext } from '../context/ColorContext';
import { DealerContext } from '../context/DealerContext';

import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, Switch, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen({ navigation }) {

  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const { dealerName, setDealerName } = useContext(DealerContext);
  const [text, setText] = useState<string>('');
  const [languageListVisible, setLanguageListVisible] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const switchColor = isDarkMode ? 'white' : '#303030'

  const handleLanguageListToggle = () => {
    setLanguageListVisible(!languageListVisible);
  };

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
    },
  
    settings: { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#303030' : 'white',
    },
  
    input: {
      height: 40,
      margin: 12,
      borderColor: isDarkMode ? 'white' : '#303030',
      borderWidth: 1,
      padding: 10,
      color: isDarkMode ? 'white' : '#303030',
    },

    icon: {
      marginLeft: 10,
      color: switchColor
    },

    icon2: {
      marginRight: 10,
      color: switchColor
    },

    sectionTitle: {
      flex: 1,
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginLeft: 10,
      color: isDarkMode ? 'white' : '#303030'
    },

    languageListContainer: {
      height: 120,
    },
    languageListContent: {
      paddingHorizontal: 10,
    },

    modal: {
      display: 'flex',
      height: global.height,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      shadowColor: '#2AC062',
      shadowOpacity: 0.5,
      shadowOffset: { 
        height: 10, 
        width: 0 
      },
      shadowRadius: 25,
    },
    titleModal: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20,
    },
    avatarRowModal: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 20,
    },
    avatarModal: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    closeButtonModal: {
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
    },
    closeTextModal: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }

  });

  return (
  <SafeAreaView style={styles.settings}>
    <View style={styles.settingRow}>
      <Icon name="globe-outline" size={40} style={styles.icon} />
      <Text style={styles.sectionTitle}>Language</Text>
      <TouchableOpacity onPress={handleLanguageListToggle}>
        <Icon name="arrow-down-circle-outline" size={30} style={styles.icon2} />
      </TouchableOpacity>
    </View>
    {languageListVisible && (
      <View style={styles.languageListContainer}>
        <FlatList
          horizontal={true}
          data={LANGUAGE_LIST}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.languageListContent}
        />
      </View>
    )}
    <View style={styles.settingRow}>
      <Icon name="moon" size={40} style={styles.icon} />
      <Text style={styles.sectionTitle}>Dark Mode</Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme}/>
    </View>
    <TouchableOpacity 
        onPress={() => {
          setShowModal(false);
        }}>
      <View style={styles.settingRow}>
        <Icon name="information-circle-outline" size={40} style={styles.icon} />
        <Text style={styles.sectionTitle}>About us</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.settingRow}>
      <Icon name="pencil" size={40} style={styles.icon} />
      <Text style={styles.sectionTitle}>Name your dealer</Text>
    </View>
    <View>
        <TextInput
          placeholder="Choose the name of your dealer..."
          onChangeText={newText => setText(newText)}
          onSubmitEditing={() => setDealerName(text)}
          value={text}   
          style={styles.input}
          cursorColor={switchColor}
          placeholderTextColor={switchColor}
        />
    </View>

    <Modal
      animationType = {"slide"}
      transparent={true}
      visible={!showModal}>
        <View style={styles.modal}>
          <Text style={styles.titleModal}>Our Dev Team</Text>
          <View style={styles.avatarRowModal}>
            <Image
              style={styles.avatarModal}
              source={{ uri: 'https://example.com/avatar1.jpg' }}
            />
            <Image
              style={styles.avatarModal}
              source={{ uri: 'https://example.com/avatar2.jpg' }}
            />
          </View>          
          <TouchableOpacity style={styles.closeButtonModal} onPress={() => {setShowModal(true)}}>
            <Text style={styles.closeTextModal}>X Close About Us</Text>
          </TouchableOpacity>
        </View>
    </Modal>
  </SafeAreaView>
  );

}