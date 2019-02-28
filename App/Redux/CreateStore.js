import { createStore, applyMiddleware, compose } from 'redux'
import ScreenTracking from './ScreenTrackingMiddleware'
import Rehydration from '../Services/Rehydration'
import ReduxPersist from '../Config/ReduxPersist';
import { navigationMiddleware } from '../Navigation/ReduxNavigation'


export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const appMiddleware = []
  const enhancers = []
  // /* ------------- Navigation Middleware ------------ */
  appMiddleware.push(navigationMiddleware)



  /* ------------- Analytics Middleware ------------- */
  appMiddleware.push(ScreenTracking)



  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...appMiddleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))
  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  return {
    store
  }
}
