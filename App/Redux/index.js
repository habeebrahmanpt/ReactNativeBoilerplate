import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import createStore from './CreateStore'
import ReduxPersist from '../Config/ReduxPersist'
import counterReducer from './Reducers/CounterReducer'
/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  counterReducer: counterReducer,
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
