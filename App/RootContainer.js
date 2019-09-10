import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { ReduxNavigationState } from './Navigation/ReduxNavigation'

/**
 * 
import App from './App';
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
                <ReduxNavigationState />
            </View>
        );
    }
}
const mapNavStateProps = state => ({
    state: state.nav
});
export default connect(null, mapNavStateProps)(RootContainer)

