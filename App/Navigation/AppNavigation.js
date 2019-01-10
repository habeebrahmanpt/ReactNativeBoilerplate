import React from 'react'
import { Dimensions } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../src/HomeScreen'
import TestPage from '../src/TestPage'

// drawer stack
// const DrawerStack = DrawerNavigator({
//   HomeScreen: { screen: HomeScreen },
//   SalesScreen: { screen: SalesScreen },
//   RecruitementScreen: { screen: RecruitementScreen },
//   SettingsScreen: { screen: SettingsScreen },
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
  TestPage: { screen: TestPage },
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'HomeScreen',
    initialRouteName: 'HomeScreen'
  })

export default PrimaryNav
