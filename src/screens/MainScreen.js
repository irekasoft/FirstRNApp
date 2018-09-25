import React , { Component } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class MainScreen extends Component {
  render(){
    return (
      <View style={{ flex:1 }} >

      <View style={{width:SCREEN_WIDTH, height:60, backgroundColor:'grey', justifyContent:'flex-end', paddingBottom:9 }}>
        <Text style={{textAlign:'center', fontSize:19, color:'white', fontWeight:'600'}}>Some Title</Text>
      </View>

      <ScrollView style={{}}>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>        
        <TouchableOpacity onPress={()=>{console.log('hahah')}}><Text>AAA</Text></TouchableOpacity>
        <View style={{ position:'absolute', width:50, height:50, backgroundColor:'blue',margin:5,zIndex:-1}}></View>
        <View style={{width:150, height:150, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>                
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:150, height:220, backgroundColor:'skyblue',margin:5}}></View>                
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>
        <View style={{width:50, height:50, backgroundColor:'skyblue',margin:5}}></View>        
      </View>
      </ScrollView>

      <View style={{width:SCREEN_WIDTH, height:60, backgroundColor:'#89C1FF', flexDirection:'row'}}>
        <Text>HelloHelloHelloHello</Text>
        <Text> Hello</Text>
      </View>

      </View>
    );
  }
}

const styles = {
  container:{
    
    
  }
}

export default MainScreen;