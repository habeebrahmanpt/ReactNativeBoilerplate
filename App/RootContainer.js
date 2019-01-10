import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import ReduxNavigation from './Navigation/ReduxNavigation'

/**
 * 
 * ******************* 
 * 
 *   RootContainer Page
 * 
 * ******************* 
 * 
 */


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

class RootContainer extends Component {

    api: Object
    constructor(props: RootContainer) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {


    }


    componentWillMount() {


    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={styles.container}>

                <ReduxNavigation />

            </View>
        );
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
    startup: () => dispatch(StartupActions.startup())
})


//   export default connect(null, mapDispatchToProps)(RootContainer)
export default RootContainer
