import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../../Themes'


export default StyleSheet.create({
    container: {
        flex: 1,

    },
    mainContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    headerStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0,
        backgroundColor: Colors.green
    },
    headerLeftStyle: {
        flex: 1,
        flexDirection: "row",
        // justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0,
        backgroundColor: Colors.green
    },
    headerRightStyle: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0,
        borderBottomWidth: 0,
        backgroundColor: Colors.green
    },
    headerTitleStyle: {
        marginLeft: 10,
        fontSize: Metrics.screenWidth / 19,
        color: Colors.white,
        fontFamily: Fonts.type.appFont
    },
    headerIconStyle: {
        height: Metrics.screenHeight / 22,
        width: Metrics.screenHeight / 22,
    },
    headerIconBackClickStyle: {
        height: Metrics.screenHeight / 20,
        width: Metrics.screenHeight / 20,
    },
    headerIconClickStyle: {
        height: Metrics.screenHeight / 20,

    },
    pageTopContainer: {
        backgroundColor: Colors.backgroundLight,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12
    },
    pageConfirmContainer: {
        backgroundColor: Colors.green,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    pageBottomContainer: {
        backgroundColor: Colors.backgroundDart,
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        borderRadius: 5
    },
    slidingUpPanelContainer: {
        top: Metrics.screenHeight / 1.5,
        bottom: Metrics.screenHeight / 1.5
    },
    slidingUpPanelContainerItem: {
        flex: 1,
        // height: Metrics.screenHeight / 1.5,
        // // width: '100%',
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center'

    },
    pageEmptyContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageEmptyImage: {
        height: Metrics.screenWidth / 5,
        width: Metrics.screenWidth / 5,
    },
    pageTopContainerRight: {
        flexDirection: "row",
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    pageTopContainerTitle: {
        fontSize: Metrics.screenWidth / 19,
        color: Colors.textPrimary,
        fontFamily: Fonts.type.appFont
    },
    flatListContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        backgroundColor: Colors.white,
    },
    flatListItemContainer: {
        backgroundColor: Colors.white,
    },

    flatListItemTopContainer: {
        padding: 8,
        backgroundColor: Colors.titleBackgroundLight,
        borderRadius: 5
    },
    flatListItemBottomFlatList: {
        backgroundColor: Colors.white,
    },
    flatListItemBottomContainer: {
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        padding: 5
    },
    flatListItemBottomContainerItem: {
        backgroundColor: Colors.white,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    flatListItemTopText: {
        fontSize: Metrics.screenWidth / 23,
        color: Colors.white,
        fontFamily: Fonts.type.appFont
    },
    flatListItemText: {
        fontSize: Metrics.screenWidth / 25,
        color: Colors.textPrimary,
        fontFamily: Fonts.type.appFont
    },
    dividerLine: {
        width: '100%',
        borderWidth: 1,
        alignSelf: "center",
        borderColor: Colors.dividerLine
    }
})