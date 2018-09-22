/** @format */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store';

// Uncomment below if you want to clear redux persisted state
persistor.purge();

const AppContainer = () =>
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </StoreProvider>

AppRegistry.registerComponent(appName, () => AppContainer);
