import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Provider, connect } from 'react-redux';
import { AppNavigator, middleware } from './Navigation/ReduxNavigation'
/**
 * 
 * ******************* 
 * 
 *   RootContainer Page
 * 
 * ******************* 
 * 
 */


 
class RootContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }


    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppNavigator />
            </View>
        );
    }
}
const mapNavStateProps = state => ({
    state: state.nav
});
export default connect(null, mapNavStateProps)(RootContainer)

