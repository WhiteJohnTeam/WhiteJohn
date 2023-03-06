import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./TabNavigations";
import store from "./redux/store";
import { Provider } from "react-redux";
import React, { useState } from "react";
import { ColorContext } from './context/ColorContext';
import { DealerContext } from './context/DealerContext';
import { Dimensions } from "react-native";


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dealerName, setDealerName] = useState('');

  const toggleTheme = () => setIsDarkMode(prevState => !prevState);
  
  global.width = Dimensions.get('window').width;
  global.height = Dimensions.get('window').height;

  return (          
  <SafeAreaProvider>
    <ColorContext.Provider value={{ isDarkMode, toggleTheme}}>
      <DealerContext.Provider value={{ dealerName, setDealerName}}>
        <Provider store={store}>
            <Navigation/>
        </Provider>
      </DealerContext.Provider>
    </ColorContext.Provider>
  </SafeAreaProvider>
  );
}
