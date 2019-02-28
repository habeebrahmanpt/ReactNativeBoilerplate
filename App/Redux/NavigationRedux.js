import AppNavigation from '../Navigation/AppNavigation'


/**
 * 
 *  This class not using and using createNavigationReducer 
 * function from 'react-navigation-redux-helpers'
 *  
 * 
 */


export const reducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
const prevGetStateForAction = AppNavigation.router.getStateForAction;
AppNavigation.router = {
  ...AppNavigation.router,
  getStateForAction(action, state, count) {

    console.log("dddddddddd", "ddddddddddddddddddddddddd")
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - (count) ? count : 1);
      routes.push(action)
      return {
        ...state,
        routes,
        index: routes.length - 1
      };
    }
    else if (state && action.type === 'singleTop') {
      const { type, routeName } = action
      const routes = state.routes
      const lastRoute = state.routes[state.routes.length - 1]
      routes.push(action)
      return {
        ...state,
        routes,
        index: routes.length - 1
      };
    }

    if (state && state.routes.length > 0) {
      const { type, routeName } = action
      const routes = state.routes
      const lastRoute = state.routes[state.routes.length - 1]
      if (lastRoute.routeName == routeName) {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action)
        return
      }
      else
        return prevGetStateForAction(action, state);
    }
    else
      return prevGetStateForAction(action, state);
  }
}