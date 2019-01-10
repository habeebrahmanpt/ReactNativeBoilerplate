
import React, { Component } from 'react';
import RootContainer from './RootContainer'; 
import { Provider } from 'react-redux';
import createStore from './Redux'
 

/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/
const store = createStore()


export default class App extends Component {
  render() {

    return (
      <Provider store={store}> 
        <RootContainer />
      </Provider>
    );
  }
}
