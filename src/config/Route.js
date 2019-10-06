import React, {Component} from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';

// ------------------ IMPORT COMPONENT ------------------
import Home from '../components/Home';
// import List from '../components/List';

const TabNavigationBottom = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
        ),
      },
    },
    Profile: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: {backgroundColor: '#3BAD87'},
  },
);

export default TabNavigationBottom;
