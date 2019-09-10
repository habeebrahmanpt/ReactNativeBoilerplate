import React from 'react'
import { Dimensions } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';  // if using this react-native-reanimated  needed 



import TestPage from '../src/TestPage'
import CounterApp from '../src/CounterApp'


import HomeScreen from '../src/HomeScreen'
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
//     contentComponent: CounterApp,
//   })


// const BottomStack = createBottomTabNavigator({
//   HomeScreen: { screen: HomeScreen },
//   TestPage: { screen: TestPage }
// }, {
//     initialRouteName: 'HomeScreen',
//   })

const PrimaryNav = createStackNavigator({
  CounterApp: { screen: CounterApp },
  TestPage: { screen: TestPage },
  Cart: { screen: Cart },


   
  HomeScreen: { screen: HomeScreen },
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'HomeScreen',
    initialRouteName: 'HomeScreen'
  })

export default PrimaryNav
