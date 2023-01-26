import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView, Switch} from 'react-native';
//import { SafeAreaView, Button } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, margin: 5}}>
      
      {/* TITLE */}
      <View style={{position: 'absolute', top: 10, alignSelf: 'center'}}>
        <Text style={styles.title}>SETTINGS</Text>
      </View>

      {/* SETTING ICON 
      <View style={{position: 'absolute', top: 20, right: 20, marginTop: 15}}>
        <Icon name='settings' size={45}></Icon>
      </View>*/}

      <View style={styles.options}>
        <View style={styles.settingRow}>
          <Icon name='globe-outline' size={65}></Icon>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Language</Text>
          <Switch></Switch>
        </View>

        <View style={styles.settingRow}>
          <View style={styles.iconDecoration}>
            <Icon name='moon' size={50}></Icon>
          </View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Dark Mode</Text>
          <Switch></Switch>
        </View>

        <View style={styles.settingRow}>
          <Icon name='information-circle-outline' size={65}></Icon>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Language</Text>
          <Switch></Switch>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    margin: 20
  },

  iconDecoration: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 3,
    alignItems: 'center',
  },

  settingRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  options: {
    //backgroundColor: 'grey',
    alignSelf: 'center',
    height: 300,
    width: 360,
    marginTop: 150
  }
});

