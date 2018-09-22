/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { TabNavigator } from 'react-navigation';
import LoginScreen  from './src/features/user/screens/Login';

export const Tabs = TabNavigator({
  'Login': {
    screen: LoginScreen,
  }
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
