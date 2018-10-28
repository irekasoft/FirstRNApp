import React , { Component } from 'react';
import { View, 
  Text, 
  Dimensions, 
  ScrollView, 
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,

} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const InputField = (props) => {
  return (
    <View style={{paddingVertical:16}}>
      <Text>{ props.title ? props.title : "Title"}</Text>
      <TextInput style={{height:40, backgroundColor:'white'}} placeholder={ props.placeholder ? props.placeholder : props.title } />
      <View style={{height:1,backgroundColor:'#D5D5D5'}} />
    </View>
  );
}

class InitialScreen extends Component {

  // state is for tracking changes inside the class
  state = {
    myName: '',
  }


  render(){
    return (

      <SafeAreaView style={styles.container}>

        <View style={{padding:16}}>
          <Text style={{fontSize:29,fontWeight:'500', paddingBottom:8}}>First RN App</Text>
          <Text style={{fontSize:15}}>We will discover some of the basic UI elements in building mobile apps. We use SafeArea, to make sure our UI content is within the 'safe view' which is not being obstructed by status bar, notch and home indicator. </Text>
        </View>

        <ScrollView style={{padding:16}}>

          <Text>Hello, this text is inside a ScrollView. ScrollView is the area we can put more content into a limited parent view, but we can scroll to reveal others's content. </Text>

          <View style={{height:12}}></View>

          <Text>
            We will make some text here. We will use some important concept like <Text style={{fontWeight:'500',fontSize:18}}>props</Text> and <Text style={{fontWeight:'500',fontSize:18}}>state</Text>. 
          </Text>

          <View style={{paddingVertical:16}}>
            <Text>My Name</Text>
            <TextInput 
              style={{height:40, backgroundColor:'white'}} 
              placeholder={ "Write something" } 
              onChangeText = {(text) => { this.setState({myName: text})} }
              value={this.state.myName}
            />
            <View style={{height:1,backgroundColor:'#D5D5D5'}} />
          </View>

          {/* Just using a component like JSX */}
          <InputField/>

          {/* Can be reused and change the props*/}
          <InputField title="Test Props"/>

          {/* Can be reused and change the props*/}
          <InputField title="My No"/>

          {/* RN's button depends on the platform */}
          <Button title="This is Button" onPress={()=>{alert('My name is :' + this.state.myName)} } />

          {/* So the lower textField seems not to be play nice with keyboard, use Keyword Avaoidance Preview*/}
          {/* To make consistent looking Button use TouchableOpacity or other Touchable.. class */}
          <TouchableOpacity onPress={()=>{ console.log('can debug on Expo XDE') }}>
            <Text>This a Button Also</Text>
          </TouchableOpacity>

          <Text>
            To advance in RN development you need to use yarn or npm to dependancie to your project. I personally use yarn for RN development.
          </Text>

          {/* Add image from local file */}
          <Image style={{alignSelf:'center'}} source={require('./src/img/devcon-logo.png')} />

          {/* Add image from network */}
          <Image style={{alignSelf:'center', width:200, height:200, resizeMode:'contain'}} source={{ uri:'https://www.incapsula.com/images/illustartions2/cdn-product/index/free-http2-support.png'}}  />

        </ScrollView>

      </SafeAreaView>

    );
  }
}

const styles = {
  container:{   
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  }
}

export default InitialScreen;