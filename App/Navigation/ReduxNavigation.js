// import React from 'react'
// import * as ReactNavigation from 'react-navigation'
// // import { addNavigationHelpers } from 'react-navigation'
// import { connect } from 'react-redux'
import { BackHandler, Alert } from 'react-native'
import { NavigationActions } from "react-navigation";
import AppNavigator from './AppNavigation'
// import {
//   reduxifyNavigator,
//   createReduxBoundAddListener,
//   createReactNavigationReduxMiddleware,
// } from 'react-navigation-redux-helpers';


import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';


// const middleware = createReactNavigationReduxMiddleware(
//   "root",
//   state => state.nav,
// );

// const addListener = createReduxBoundAddListener("root");


// class ReduxNavigation extends React.Component {
//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
//   }
//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
//   }
//   /**
//    * 
//    * device back key click
//    */
//   onBackPress = () => {
//     const { dispatch, nav } = this.props
//     if (nav.index === 0) {
//       Alert.alert(
//         'Exit App',
//         'Are you sure you want to exit the App?', [{
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel'
//         }, {
//           text: 'OK',
//           onPress: () => BackHandler.exitApp()
//         },], {
//           cancelable: false
//         }
//       )
//       return true;
//     }
//     dispatch(ReactNavigation.NavigationActions.back())
//     return true
//   }


//   render() {
//     const { dispatch, nav } = this.props
//     const navigation = ReactNavigation.addNavigationHelpers({
//       dispatch,
//       state: nav,
//       addListener
//     })
//     return <AppNavigation navigation={navigation} />

//   }
// }
// const addListener = reduxifyNavigator(AppNavigator, "root");
// const mapStateToProps = state => ({ nav: state.nav })
// export default connect(mapStateToProps)(addListener)


const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer

});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);


class ReduxNavigation extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {

    console.log("ddddddddddddd", this.props)
    const { dispatch, nav } = this.props;
    if (nav && nav.index === 0) {
      return false;
    }

    // dispatch(NavigationActions.back());
    return true;
  };
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState navigation={{
          dispatch: this.props.dispatch,
          state: this.props.nav
        }} />
      </Provider>
    );
  }
}
export default ReduxNavigation;