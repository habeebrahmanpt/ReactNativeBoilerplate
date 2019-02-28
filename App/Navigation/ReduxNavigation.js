import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from "react-navigation";
import { BackHandler, Alert } from 'react-native'

import {
    createReduxContainer,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import AppNavigator from './AppNavigation'


// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const navigationMiddleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);




// create nav component
class ReduxNavigation extends PureComponent {
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

        const { dispatch, state } = this.props;
        if (state.index === 0) {
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

        dispatch(NavigationActions.back());
        return true;
    };
    render() {
        const { dispatch, state } = this.props;
        return <AppWithNavigationState dispatch={dispatch} state={state} />;
    }
}

const ReduxNavigationState = connect(mapStateToProps)(ReduxNavigation);


export { ReduxNavigationState, AppNavigator, navigationMiddleware };