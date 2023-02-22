import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';

const colors = ['blue', 'red', 'gold', 'green', 'purple'];
const letters = ['H', 'S', 'P', 'D', 'R']

export default function PlayScreen() {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.text_top}>Recommended choice :</Text>
      </View>
      <View style={styles.dealer}>
        <Image source={require('../assets/dealer.png')}/>
      </View>      
      <View style={styles.middle}>
        <Text style={styles.text_middle}>YOUR CHOICE</Text>
      </View>
      <ScrollView horizontal={true} style={styles.container}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.button, { backgroundColor: color }]}>
            <TouchableOpacity >
              <Text style={styles.buttonText}>
                {letters[index]}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.down}> 
        <Image source={require('../assets/hands.png')}/>
      </View>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  top: {
    justifyContent: 'flex-start',
  },
  dealer: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  text_top: {
    fontSize: 20,
  },
  middle: {
    alignItems: 'center'
  },
  text_middle: {
    fontSize: 20,
  },
  down: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  container: {
    alignSelf: 'center',
    paddingTop: 20,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});