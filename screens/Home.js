import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({navigation}) {
  return (
      <View>
        <ImageBackground style={styles.backgroundImage} source={require('../assets/home_WhiteJohn.png')} resizeMode='cover'>
          <View>
            <TouchableOpacity style={styles.buttonForm} onPress={() => navigation.navigate("Play")}>
              <Text style={{fontSize: 10}}>Press anywhere to play</Text>     
            </TouchableOpacity> 
          </View>
        </ImageBackground>
      </View> 
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  buttonForm: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export const CARD_LIST : Card[] = [
//   new Card(1,7,"hearts",""),
//   new Card(2,8,"hearts",""),
//   new Card(3,9,"hearts",""),
// ]

