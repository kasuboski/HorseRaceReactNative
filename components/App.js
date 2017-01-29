import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './HomeScreen';
import RaceScreen from './RaceScreen';

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    backgroundColor: '#8E443D',
  };
  return style;
};

const App = () => {
    return (
        <Router getSceneStyle={getSceneStyle}>
            <Scene key='root' hideNavBar={true}>
                <Scene key='home'
                    component={HomeScreen}
                    initial={true}
                />
                <Scene key='race'
                    component={RaceScreen}
                />
            </Scene>
        </Router>
    );
};

export default App;
