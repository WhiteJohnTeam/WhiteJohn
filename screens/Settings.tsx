import React, { useRef, useContext, useEffect, useState } from 'react';
import { ColorContext } from '../context/ColorContext';
import { DealerContext } from '../context/DealerContext';

import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, Switch, FlatList, Modal, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({ navigation }) {

  const { isDarkMode, toggleTheme } = useContext(ColorContext);
  const { dealerName, setDealerName } = useContext(DealerContext);
  const [text, setText] = useState<string>('');
  const [languageListVisible, setLanguageListVisible] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [placeholder, setPlaceholder] = useState('Choose the name of your dealer...');
  const { width } = Dimensions.get('window');

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

  const RightToLeftAnimation = ({ text }) => {
    const translateX = useRef(new Animated.Value(500)).current;
  
    useEffect(() => {
      Animated.loop(
        Animated.timing(
          translateX,
          {
            toValue: -1470,
            duration: 10000,
            useNativeDriver: true,
          }
        )
      ).start();
    }, [translateX]);
  
    useEffect(() => {
      AsyncStorage.getItem('dealerName').then(value => {
        if (value !== null) {
          setDealerName(value);
          setPlaceholder(value);
        }
      });
    }, []);

    return (
      <Animated.Text style={{ transform: [{ translateX }], color: switchColor, fontSize: 20,}} numberOfLines={1}>
        {text}
      </Animated.Text>
    );
  };
  
  const handleSubmitEditing = () => {
    setDealerName(text);
    AsyncStorage.setItem('dealerName', text);
  };

  const styles = StyleSheet.create({

    top: {
      flexDirection: 'row',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginRight: 10,
      marginLeft: 10,
    },
    
    middle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    bottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    topTitle:{
      fontSize: 35,
      fontWeight: 'bold',
      color: switchColor,
    },

    dealer_image: {
      width: global.width/2.5,
      height: global.height/4,
      margin: 10,
    },

    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    settings: { 
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: isDarkMode ? '#303030' : 'white',
    },
  
    input: {
      width: width*0.8,
      height: 40,
      margin: 12,
      borderColor: isDarkMode ? 'white' : '#303030',
      borderWidth: 1,
      padding: 10,
      color: isDarkMode ? 'white' : '#303030',
      textAlign: 'center'
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

    bottomButton: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
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
    bodyModal: {
      fontSize: 16,
      marginBottom: 20,
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

    <View style={styles.top}>
      <Text style={styles.topTitle}>SETTINGS</Text>
      <TouchableOpacity 
          onPress={() => {
            setShowModal(false);
          }}
          style={styles.bottomButton}>
        <View style={styles.settingRow}>
          <Icon name="information-circle-outline" size={40} style={styles.icon} />
        </View>
      </TouchableOpacity>

      <Modal
        animationType = {"slide"}
        transparent={true}
        visible={!showModal}>
          <View style={styles.modal}>
            <Text style={styles.titleModal}>Our Dev Team</Text>         
            <Text style={styles.bodyModal}>BRODA Lou - French Front Developer</Text>         
            <Text style={styles.bodyModal}>FRANCO Nicolas - Brazilian Back Developer</Text>         
            <TouchableOpacity style={styles.closeButtonModal} onPress={() => {setShowModal(true)}}>
              <Text style={styles.closeTextModal}>X Close About Us</Text>
            </TouchableOpacity>
          </View>
      </Modal>
    </View>
    
    <View style={styles.middle}>
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

      <View style={styles.settingRow}>
        <Icon name="pencil" size={40} style={styles.icon} />
        <Text style={styles.sectionTitle}>Name your dealer</Text>
      </View>
      <View>
          <TextInput
            placeholder={placeholder}
            onChangeText={newText => setText(newText)}
            onSubmitEditing={handleSubmitEditing}
            value={text}   
            style={styles.input}
            cursorColor={switchColor}
            placeholderTextColor={switchColor}
          />
      </View>
    </View>

    <View style={{flexDirection: 'row', flexWrap: 'wrap', width:10000}}>
        <RightToLeftAnimation text="Remember, the thrill of winning can quickly turn into the agony of addiction. Play responsibly and never bet more than you can afford to lose. When the fun stops, stop."/>
    </View>
         
    
  </SafeAreaView>


  );
}