import React, { Component } from 'react'

import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';

const RootStack = createStackNavigator({
  home:{
    screen: HomeScreen
  },
  second:{
    screen: SecondScreen
  }
})

class App extends Component {

  render() {
    return (
      <RootStack/>
    );
  }

}

export default App;
