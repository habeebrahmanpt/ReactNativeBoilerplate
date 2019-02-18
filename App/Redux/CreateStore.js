import { createStore, applyMiddleware, compose } from 'redux'
import { navigationMiddleware } from '../Navigation/ReduxNavigation';
import ScreenTracking from './ScreenTrackingMiddleware'
import Rehydration from '../Services/Rehydration'
import ReduxPersist from '../Config/ReduxPersist';


export default (rootReducer) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  // /* ------------- Navigation Middleware ------------ */
  middleware.push(navigationMiddleware)


  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)



  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

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
