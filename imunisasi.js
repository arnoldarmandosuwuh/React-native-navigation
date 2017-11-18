import React from 'react';
import {
  AppRegistry,
  Text,
  Button,TextInput,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class imunisasi extends React.Component {
    proses() {
        let usia = parseInt (this.state.usia)
        let hasil = "-";
        
        // cek grade berdasarkan total
        if (usia == 0)
        {
        hasil = "Hepatitis B1 & Polio 0";
        }
        else if (usia == 1)
        {
        hasil = "Hepatitis B2";
        }
        else if (usia >= 0 && usia <= 2)
        {
        hasil = "BCG";
        }
        else if (usia == 2)
        {
        hasil = "DTP 1, HiB 1 & Polio 1";
        }
        else if (usia == 4)
        {
        hasil = "DTP 2, HiB 2 & Polio 2";
        }
        else if (usia == 6)
        {
        hasil = "DTP 3, HiB 3, Polio 3, Hepatitis B3";
        }
        else if (usia == 9)
        {
        hasil = "Campak (MR-1)";
        }
        else if (usia >= 15 && usia <= 18)
        {
        hasil = "MMR & HiB 4";
        }
        else if (usia == 18)
        {
          hasil = "DTP 4 & Polio 4"
        }
        else if (usia == 24)
        {
          hasil="Hepatitis A"
        }
        else if (usia >= 24 && usia <= 36)
        {
          hasil="Tifoid"
        }
        else if (usia == 60)
        {
          hasil="DTP 5, Polio 5"
        }
        else if (usia > 60)
        {
          hasil="Sudah Bukan Balita"
        }
        else
        {
        hasil = "Belum Waktunya Diimunisasi";
        }
        this.setState({hasil});
    }
      constructor(props){
        super(props)
        this.state = {
          usia:0,
          hasil:0,
        };
      }
    static navigationOptions = {
        title: 'Imunisasi',
      };
    render() {
    return (
        <View style = {{flex:1,backgroundColor:'#ef6c6c'}}>
        
               <View style={{backgroundColor:'#1b1b4e'}}>
                  <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
                   Imunisasi Pada Balita
                 </Text>
                </View>
               
               <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
                   <TextInput style = {{height: 40}}
                     placeholder="Masukkan  Usia"
                     onChangeText={(usia)=>this.setState({usia})}
                     keyboardType = 'numeric'
                   />
                   <Button
                   title="Proses"
                   onPress={() => this.proses()} />
              </View>
        
               <View style={{margin:20, backgroundColor:'#90caf9'}}>
                 <Text style = {{padding: 10, fontSize: 20}} >
                     Usia =  {this.state.usia} {" Bulan \n"}
                     Imunisasi =  {this.state.hasil} {"\n"}
                 </Text>
                </View>
          </View> 
            );
  }
}
