import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './TabNavigations';
import store from './redux/store';
import { Provider } from 'react-redux';

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
