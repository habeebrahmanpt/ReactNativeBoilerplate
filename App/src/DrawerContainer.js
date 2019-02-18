
import React, { Component } from 'react'
import {
    View, StyleSheet, Platform, TouchableOpacity,
    NetInfo, Text
} from 'react-native'
import { connect } from 'react-redux'




/**
 * 
 * ******************* 
 * 
 *   RootContainer Page
 * 
 * ******************* 
 * 
 */
class DrawerContainer extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }
    }

    /**
      *   Navigate to Add Activity Page 
      * 
      * @param {Object} parms 
      */
    handlenavigateToActivity(parms) {
        this.props.navigation.navigate('TestPage', parms)
    }


    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    onPress={this.handlenavigateToActivity.bind(this, {})}>

                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>

                </TouchableOpacity>
            </View>
        );
    }
}


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


export default DrawerContainer
