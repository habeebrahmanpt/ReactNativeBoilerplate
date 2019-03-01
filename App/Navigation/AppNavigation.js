import React from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import HomeScreen from '../src/HomeScreen'
import TestPage from '../src/TestPage'
import CounterApp from '../src/CounterApp'
import Cart from '../src/cart/Cart'

// drawer stack
// const DrawerStack = createDrawerNavigator({
//   HomeScreen: { screen: HomeScreen },
//   TestPage: { screen: TestPage } 
// }, {
//     initialRouteName: 'HomeScreen',
//     drawerWidth: Dimensions.get('window').width / 1.3,
//     headerMode: 'none',
//     drawerPosition: 'left',
//     useNativeAnimations: false,
//     drawerBackgroundColor: 'transparent',
//     contentComponent: DrawerContent,
//   })

const PrimaryNav = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  CounterApp: { screen: CounterApp },
  TestPage: { screen: TestPage },
  Cart: { screen: Cart },
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'HomeScreen',
    initialRouteName: 'HomeScreen'
  })

export default PrimaryNav
