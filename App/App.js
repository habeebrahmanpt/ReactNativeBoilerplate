
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import createStore from './Redux'
import RootContainer from './RootContainer';
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/
const store = createStore()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <RootContainer />
      </Provider>
    )
  }
}
