import React from 'react'
import * as ReactNavigation from 'react-navigation'
// import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { BackHandler, Alert } from 'react-native'
import AppNavigator from './AppNavigation'
import {
  reduxifyNavigator,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';


const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

// const addListener = createReduxBoundAddListener("root");
const addListener = reduxifyNavigator(AppNavigator, "root");

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  /**
   * 
   * device back key click
   */
  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.index === 0) {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit the App?', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }, {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
        },], {
          cancelable: false
        }
      )
      return true;
    }
    dispatch(ReactNavigation.NavigationActions.back())
    return true
  }


  render() {
    const { dispatch, nav } = this.props
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
    })
    return <AppNavigation navigation={navigation} />

  }
}
const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
