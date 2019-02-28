

import { Provider } from 'react-redux';
import React from 'react';
import RootContainer from './RootContainer';

import createStore from './Redux'



const store = createStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}




