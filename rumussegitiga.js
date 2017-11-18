import React from 'react';
import {
  AppRegistry,
  Text,
  Button,TextInput,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class rumussegitiga extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      luas:0
    };
  }
  static navigationOptions = {
    title: 'Luas Segitiga',
  };
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#ef6c6c'}}>
 
        <View style={{backgroundColor:'#1b1b4e'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung luas Segitiga
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Alas"
              onChangeText={(alas)=>this.setState({alas})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />
 
            <Button
              onPress={()=>this.setState({
                luas: (this.state.alas*this.state.tinggi/2)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
 
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Alas =  {this.state.alas} {"\n"}
              Tinggi =  {this.state.tinggi} {"\n"}
              Luas = {this.state.luas}
          </Text>
         </View>
   </View>    );
  }
}