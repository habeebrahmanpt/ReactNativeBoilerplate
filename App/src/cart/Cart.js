import React, { Component } from 'react';

import {
    View, FlatList, Text, Button,
    Image, TouchableOpacity, ScrollView
} from 'react-native';

import Styles from './Styles/CartStyles'
import { Colors, Images } from '../../Themes';


import { connect } from 'react-redux'
import * as Actions from '../../Redux/ActionTypes';

const cartData = {

    total: 201.00,
    cartlist: [
        {
            shopname: 'kFC',
            id: 1,
            orrderList: [
                {
                    itemname: 'Big 8',
                    price: 23.00,
                    count: 2,
                    total: 46.00
                },
                {
                    itemname: 'Smokey Grilled 6',
                    price: 55.00,
                    count: 1,
                    total: 55.00
                }
            ]
        }, {
            id: 2,
            shopname: 'Starbucks Coffee',
            orrderList: [
                {
                    itemname: 'Iced Shaken Black tea',
                    price: 20.00,
                    count: 2,
                    total: 40.00
                },
                {
                    itemname: 'Iced Chai Black Latt',
                    price: 30.00,
                    count: 2,
                    total: 60.00
                }
            ]
        },
        {
            id: 3,
            shopname: 'kFC',
            orrderList: [
                {
                    itemname: 'Big 8',
                    price: 23.00,
                    count: 2,
                    total: 46.00
                },
                {
                    itemname: 'Smokey Grilled 6',
                    price: 55.00,
                    count: 1,
                    total: 55.00
                }
            ]
        }, {
            id: 4,
            shopname: 'Starbucks Coffee',
            orrderList: [
                {
                    itemname: 'Iced Shaken Black tea',
                    price: 20.00,
                    count: 2,
                    total: 40.00
                },
                {
                    itemname: 'Iced Chai Black Latt',
                    price: 30.00,
                    count: 2,
                    total: 60.00
                }
            ]
        }
    ]
}
class Cart extends Component {

    constructor() {
        super()
        this.state = {
            cartData: cartData,
            visible: false,
        }
    }

    componentWillMount() {

    }


    render() {

        return (
            <View style={Styles.container}>

                <View style={Styles.mainContainer}>
                    <Button
                        onPress={() => this.props.clearCart()}
                        title="Clear"
                        color="#f7a079"
                        accessibilityLabel="Clear"
                    />
                </View>

                <View style={Styles.mainContainer}>
                    <Button
                        onPress={() => {
                            this.props.addCartItem(this.state.cartData.cartlist[0])
                        }}
                        title="  Add 1 "
                        color="#841584"
                        accessibilityLabel="Add 1"
                    />
                    <Button
                        onPress={() => {
                            this.props.removeCartItem(this.state.cartData.cartlist[0])
                        }}
                        title="Remove 1"
                        color="#841584"
                        accessibilityLabel="Add 1"
                    />
                    <Button
                        onPress={() => {
                            this.props.addCartItem(this.state.cartData.cartlist[1])
                        }}
                        title="  Add 2 "
                        color="#01a07a"
                        accessibilityLabel="Add 1"
                    />
                    <Button
                        onPress={() => {
                            this.props.removeCartItem(this.state.cartData.cartlist[1])
                        }}
                        title="Remove 2"
                        color="#01a07a"
                        accessibilityLabel="Add 1"
                    />

                </View>

                {(this.props.cartData && this.props.cartData.length > 0) ?
                    <FlatList
                        style={Styles.flatListContainer}
                        data={this.props.cartData}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderCartData.bind(this)}
                    />

                    :
                    <View style={Styles.pageEmptyContainer} >

                        <Text style={[Styles.flatListItemText, { color: Colors.green }]}>Items are added to confirmed list!</Text>
                    </View>
                }

            </View>
        )
    }

    /**
     *  Render Row for Cart List
     *
        * @param {Object} rowDatas
        * @param {Number} sectionID
        * @param {Number} rowID
        */
    renderCartData(rowDatas, sectionID, rowID) {

        return (
            <View style={Styles.flatListItemContainer} >
                <View style={Styles.flatListItemTopContainer} >
                    <Text style={Styles.flatListItemTopText}>{rowDatas.item.shopname}</Text>
                </View>
                <FlatList
                    style={Styles.flatListItemBottomFlatList}
                    data={rowDatas.item.orrderList}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderCartDataItem.bind(this)}
                />

            </View >
        )
    }


    /**
     *  Render Row for Cart List
     *
     * @param {Object} rowDatas
     * @param {Number} sectionID
     * @param {Number} rowID
        */
    renderCartDataItem(rowDatas, sectionID, rowID) {

        return (
            <View>
                <View style={Styles.flatListItemBottomContainer}>
                    <View style={Styles.flatListItemBottomContainerItem} >
                        <Text style={Styles.flatListItemText}>{rowDatas.item.itemname}</Text>
                        <Image
                            style={Styles.headerIconStyle}
                            source={Images.cartEdit}
                        />
                    </View>
                    <View style={Styles.flatListItemBottomContainerItem} >
                        <View style={Styles.pageTopContainerRight} >
                            <Text style={[Styles.flatListItemText, { color: Colors.green }]}>{rowDatas.item.count} x</Text>
                            <Text style={Styles.flatListItemText}> {rowDatas.item.price} </Text>
                        </View>
                        <Text style={Styles.flatListItemText}>₹ {rowDatas.item.total}</Text>
                    </View>

                </View>
                <View style={Styles.dividerLine} />
            </View>
        )
    }


}

const mapStateToProps = (state) => ({
    cartData: state.cartReducer.cartData
});

const mapDispatchToProps = (dispatch) => ({
    addCartItem: (item) => dispatch({ type: Actions.CART_ADD_ITEM, payload: item }),
    removeCartItem: (item) => dispatch({ type: Actions.CART_REMOVE_ITEM, payload: item }),
    clearCart: () => dispatch({ type: Actions.CART_CLEAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);