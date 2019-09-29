
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import TabContainerScreen from './components/screens/TabContainer';
export default class App extends React.Component{
  render(){
    return(
      <TabContainerScreen/>
    );
  }
}



