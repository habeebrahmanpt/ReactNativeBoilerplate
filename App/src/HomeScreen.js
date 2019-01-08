import React, { Component } from 'react'
import {
    View , StyleSheet,Platform,
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
class HomeSrceen extends Component {

    
    constructor(props: homeSrceen) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {


        // if (!ReduxPersist.active) {
        //     this.props.startup()
        // }
    }
   

    componentWillMount() {


    }

     

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                {/* <Text style={styles.instructions}>{instructions}</Text> */}
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
