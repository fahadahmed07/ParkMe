import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>Home</Text>
        {/* <Text style={styles.instructions}>This is my first Test App!</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});