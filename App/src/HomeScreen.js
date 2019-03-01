import React, { Component } from 'react'
import {
    View, StyleSheet, Platform, TouchableOpacity,
    Button, Text
} from 'react-native'
import { Metrics } from '../Themes';




/**
 * 
 * ******************* 
 * 
 *   RootContainer Page
 * 
 * ******************* 
 * 
 */
class HomeSrceen extends Component {


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

    /**
      *   Navigate to Add Activity Page 
      * 
      * @param {Object} parms 
      */
    handlenavigateToReduxCounterExample(parms) {
        this.props.navigation.navigate('CounterApp', parms)
    }


    /**
      *   Navigate to Add Activity Page 
      * 
      * @param {Object} parms 
      */
    handlenavigateToReduxCartExample(parms) {
        this.props.navigation.navigate('Cart', parms)
    }


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>Welcome to React Native!</Text>

                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <View style={{ height: Metrics.section }} />
                <Button
                    onPress={this.handlenavigateToActivity.bind(this, {})}
                    title=" Next page Example"
                    color="#f7a079"
                    accessibilityLabel=" Next page Example"
                />
                <View style={{ height: Metrics.section }} />
                <Button
                    onPress={this.handlenavigateToReduxCounterExample.bind(this, {})}
                    title=" Redux Counter Example"
                    color="#841584"
                    accessibilityLabel=" Redux Counter Example"
                />
                <View style={{ height: Metrics.section }} />
                <Button
                    onPress={this.handlenavigateToReduxCartExample.bind(this, {})}
                    title=" Redux Cart Example"
                    color="#01a07a"
                    accessibilityLabel=" Redux Cart Example"
                />

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


export default HomeSrceen
