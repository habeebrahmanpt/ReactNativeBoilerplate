
import React, { Component } from 'react';
import RootContainer from './RootContainer';
import AppNavigation from './Navigation/AppNavigation'

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers, } from 'redux';
import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { AppNavigator, middleware } from './Navigation/ReduxNavigation';
const navReducer = createNavigationReducer(AppNavigation);


const appReducer = combineReducers({
  // nav: navReducer
  nav: require('./Redux/NavigationRedux').reducer,

});

const store = createStore(appReducer, applyMiddleware(middleware));

/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/
// const store = createStore()


export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        {/* <AppNavigator /> */}
        <RootContainer />
      </Provider>
    );
  }
}
