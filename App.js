import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './TabNavigations';
import store from './redux/store';
import { Provider } from 'react-redux';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';

const colors = ['blue', 'red', 'gold', 'green', 'purple'];
const letters = ['H', 'S', 'P', 'D', 'R']

export default function App() {
  return (
    <Provider store ={store}>
    <SafeAreaProvider>
      <Navigation>
      </Navigation>
    </SafeAreaProvider>
  </Provider>

  );
}