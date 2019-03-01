import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { AppNavigator } from '../Navigation/ReduxNavigation'
import createStore from './CreateStore'
import ReduxPersist from '../Config/ReduxPersist'
import counterReducer from './Reducers/CounterReducer'
import CartReducer from './Reducers/CartReducer'
import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
/* ------------- Assemble The Reducers ------------- */


/**
 *  Creating navigation reducer inted instead of  NavigationRedux.js class  
 */
const navReducer = createNavigationReducer(AppNavigator);

export const reducers = combineReducers({
  // nav: require('./NavigationRedux').reducer,
  nav: navReducer,
  counterReducer: counterReducer,
  cartReducer: CartReducer
})

export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }
  let { store } = createStore(finalReducers)


  return store
}
