import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./TabNavigations";
import store from "./redux/store";
import { Provider } from "react-redux";
import React, { useState } from "react";
import { ColorContext } from './context/ColorContext';
import { DealerContext } from './context/DealerContext';


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dealerName, setDealerName] = useState('');

  const toggleTheme = () => setIsDarkMode(prevState => !prevState);
  
  return (
    <ColorContext.Provider value={{ isDarkMode, toggleTheme}}>
      <DealerContext.Provider value={{ dealerName, setDealerName}}>
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </Provider>
      </DealerContext.Provider>
    </ColorContext.Provider>
  );
}
