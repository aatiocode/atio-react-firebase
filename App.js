import React from 'react';
import {createAppContainer} from 'react-navigation';
import FixTime from './src/config/fixTime';
import {TabNavigationBottom} from './src/config/Route';
import {View} from 'react-native';

const NavPageTabNavigationBottom = createAppContainer(TabNavigationBottom);

export default class App extends React.Component {
  render() {
    return (
      <View>
        <NavPageTabNavigationBottom />
      </View>
    );
  }
}
