// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Config from '../Config/AppConfig'
// import DateUtil from '../Utility/DateUtil'
// import { AsyncStorage } from 'react-native'
// import { Path } from 'react-native-svg';

// our "constructor"
const create = (accessToken) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
 
  var baseURL = Config.API_BASE_URL


  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json'
      // 'time-zone': DateUtil.getTimeZone(),
      // 'Authorization': accessToken
    },
    // 10 second timeout...
    timeout: 60000
  })

  // api.addRequestTransform((request) => {
  //   var data = request.data ? request.data : request.params
  // })

  // api.addResponseTransform((response) => {

  // })
  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  //   const login = () => api.get('')
  //   const getRate = () => api.get('rate_limit')
  //   const getUser = (username) => api.get('search/users', {q: username})


  const RefreshToken = (RefreshTokenData) => api.post('users/token/', RefreshTokenData)
  const Login = (LoginData) => api.post('users/login/', LoginData)
 

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2 
    Login, 
    RefreshToken 



  }
}

// let's return back our create method as the default.
export default {

  create
}
