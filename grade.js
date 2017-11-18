import React from 'react';
import {
  AppRegistry,
  Text,
  Button,TextInput,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class grade extends React.Component {
    hitungtotal() {
        let tugas = parseInt ((this.state.tugas*20) / 100); // total tugas diambil 20%
        let uts = parseInt((this.state.uts*40) / 100); // total UTS diambil 40%
        let uas = parseInt((this.state.uas*40) / 100); // total UAS diambil 40%
        
        // jumlahkan semua agar menghaslkan total akhir
        let total = tugas + uts + uas;
        let grade = "-";
        
        // cek grade berdasarkan total
        if (total >= 85 && total <= 100)
        {
        grade = "A";
        }
        else if (total >= 80 && total <=84)
        {
        grade = "B+";
        }
        else if (total >= 70 && total <=79)
        {
        grade = "B";
        }
        else if (total >= 65 && total <= 69)
        {
        grade = "C+";
        }
        else if (total >= 55 && total <= 64)
        {
        grade = "C";
        }
        else if (total >= 45 && total <= 54)
        {
        grade = "D";
        }
        else if (total >= 0 && total <= 44)
        {
        grade = "E";
        }
        else
        {
        grade = "Input Salah";
        }
        this.setState({total, grade});
    }
  
      constructor(props){
        super(props)
        this.state = {
          tugas:0,
          uts:0,
          uas:0,
          total:0, 
          grade:0,      
          value: 0

        };
      }
      handleOnPress(value){
        this.setState({value:value})
    }
    static navigationOptions = {
        title: 'Grade Nilai',
      };
    render() {
    return (
        <View style = {{flex:1,backgroundColor:'#ef6c6c'}}>

        <View style={{backgroundColor:'#1b1b4e'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
           Aplikasi Perhitungan Grade Nilai
          </Text>
         </View>
               
         <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
                   <TextInput style = {{height: 40}}
                     placeholder="Masukkan Tugas"
                     onChangeText={(tugas)=>this.setState({tugas})}             
                   />
                   <TextInput style = {{height: 40}}
                     placeholder="Masukkan UTS"
                     onChangeText={(uts)=>this.setState({uts})}             
                   />
                   <TextInput style = {{height: 40}}
                     placeholder="Masukkan UAS"
                     onChangeText={(uas)=>this.setState({uas})}             
                   />
                   <Button
                    title="Hitung"
                    onPress={() => this.hitungtotal()} />
              </View>
        
              <View style={{margin:20, backgroundColor:'#90caf9'}}>
              <Text style = {{padding: 10, fontSize: 20}} >
                     Total =  {this.state.total} {"\n"}                                                                   
                     Grade = {this.state.grade} {"\n"}                                        
                 </Text>
                </View>
          </View> 
            );
  }
}
