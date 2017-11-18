import React from 'react';
import {
  AppRegistry,
  Text,
  Button,TextInput,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class rumuslingkaran extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phi:3.14,
      jari2:0,
      luas:0
    };
  }
  static navigationOptions = {
    title: 'Luas Lingkaran',
  };
  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#ef6c6c'}}>
 
        <View style={{backgroundColor:'#1b1b4e'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Luas Lingkaran
          </Text>
         </View>
        
        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Jari-Jari"
              onChangeText={(jari2)=>this.setState({jari2})}
              keyboardType = 'numeric'
            />
 
            <Button
              onPress={()=>this.setState({
                luas: (this.state.phi*this.state.jari2*this.state.jari2)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>
 
        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Jari-Jari =  {this.state.jari2} {"\n"}
              Luas = {this.state.luas}
          </Text>
         </View>
   </View>    );
  }
}