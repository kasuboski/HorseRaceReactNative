import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/App.js';

export default class HorseRace extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('HorseRace', () => HorseRace);
