import { StyleSheet, Platform } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.background
  },
  headerTitle: {
    fontFamily: 'Karla-Regular',
    fontSize: Metrics.screenWidth / 18,
    color: Colors.snow,
    textAlign: 'center',
  },
  drawerContainer: {
    marginTop: (Platform.OS === 'ios') ? Metrics.screenHeight/27 : 0,
    backgroundColor: Colors.borderColor,
    justifyContent: 'space-between',
    padding: Metrics.normalPadding,
    flex: 1,
  },
  drawerInnerContainer: {
    backgroundColor: Colors.containerDataArea,
    borderRadius: Metrics.normalBorderRadius,
    borderWidth: Metrics.normalPadding,
    borderColor: Colors.borderColor2,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Metrics.screenHeight / 30,
    flex: 1,
    padding: 3
  },
  profile_image: {
    width: Metrics.screenWidth / 3.5,
    height: Metrics.screenWidth / 3.5,
    borderRadius: Metrics.screenWidth / 7
  },
  nameStyle: {
    fontFamily: 'Karla-Regular',
    marginTop: Metrics.screenHeight / 50,
    fontSize: Metrics.screenWidth / 18,
    color: Colors.snow
  },
  profileStyle: {
    alignItems: 'center',
    marginTop: Metrics.screenHeight / 50,
    justifyContent: 'center',
  },
  footerStyle: {
    fontFamily: 'Karla-Regular',
    fontSize: Metrics.screenWidth / 24,
    color: Colors.footerColor,
  },
  footerView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.screenHeight / 12,
  },
  separeLine: {
    height: 0.5,
    width: Metrics.screenWidth / 1.8,
    backgroundColor: Colors.dividerLineSlider,
    marginTop: Metrics.screenHeight / 25,
  },
  screenStyles: {
    marginTop: Metrics.screenHeight / 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  screen: {
    width: Metrics.screenWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.innerBorderRadius,
    marginBottom: 2,
    height: Metrics.screenHeight / 12
  },
  screenTextStyle: {
    fontFamily: 'Karla-Regular',
    fontSize: Metrics.screenWidth / 20,
    color: Colors.snow,
  },
  selectedViewStyle: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Metrics.screenWidth / 2.1,
    height: Metrics.screenHeight / 14,
    borderRadius: Metrics.innerBorderRadius - 2,
    borderColor: Colors.borderColor,
    borderWidth: Metrics.innerPadding
  }
})
