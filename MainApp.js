import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  Image,
  StyleSheet,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import rumuslingkaran from './rumuslingkaran';
import rumuspersegi from './rumuspersegi';
import rumussegitiga from './rumussegitiga';
import gradenilai from './grade';
import imunisasibalita from './imunisasi';
class Menu1 extends React.Component {
  static navigationOptions = {
    title: 'MENU RUMUS',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Button
       onPress={() => navigate('Menu2')}
        title="Luas Lingkaran"
        />
        <Button
       onPress={() => navigate('Menu3')}
        title="Luas Persegi"
        />
        <Button
       onPress={() => navigate('Menu4')}
        title="Luas Segitiga"
        />
        <Button
       onPress={() => navigate('Menu5')}
        title="Grade Nilai"
        />
        <Button
       onPress={() => navigate('Menu6')}
        title="Imunisasi"
        />
      </View>
      
    );
  }
}



class MainApp extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  redirect()
  {
  this.props.navigation.navigate('Menu1')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View  style = {{flex:1,backgroundColor:'#6cefc3'}}>
        <Text style={styles.instructions}>Aplikasi Penggunaan Navigation Pada React Native</Text>
        <Text style={styles.footer}>Copyright2017</Text>
        <Image
          style={{width: 368, height: 500, alignSelf:'center'}}
          source={require('./image/Logo-ITATS.png')}
        />
        
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#6cefc3',
  },
 
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 15,
    marginBottom: 5,
  },
  footer: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 10,
  },
});
//const Bar = StackNavigator({
const Bar = TabNavigator({
    
  Home: { screen: MainApp },
  Menu1: { screen: Menu1 },
  Menu2: { screen: rumuslingkaran },
  Menu3: { screen: rumuspersegi },
  Menu4: { screen: rumussegitiga },
  Menu5: { screen: gradenilai },
  Menu6: { screen: imunisasibalita },
});

AppRegistry.registerComponent('react-native-navigation', () => Bar);
