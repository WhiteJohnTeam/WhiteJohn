import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigations';

export default function App() {
  return (
   <SafeAreaProvider>
    <Navigation>
    </Navigation>
   </SafeAreaProvider>
  );
}