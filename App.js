/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import Navigation from './config/navigation'
import Login from "./screens/authentication/Login";

export default class App extends Component {
  render() {
    return (
      <Navigation/>
      // <Login/>
      // <View style={styles.container} >
      //   {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>This is my first Test App!</Text> */}
      // </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//   }
// });