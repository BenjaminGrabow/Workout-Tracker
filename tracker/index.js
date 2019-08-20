import { AppRegistry } from 'react-native';
import App from './App';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './store/reducer';
import React from 'react';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const AppContainer = () =>
  <NativeRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </NativeRouter>;

AppRegistry.registerComponent('tracker', () => AppContainer);
