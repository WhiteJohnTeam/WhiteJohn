import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./TabNavigations";
import store from "./redux/store";
import { Provider } from "react-redux";
import React from "react";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
