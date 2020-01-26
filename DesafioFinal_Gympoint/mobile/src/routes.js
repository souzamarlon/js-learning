// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Help,
          },

          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              labelStyle: {
                fontSize: 14,
                marginBottom: 10,
              },
              activeTintColor: '#EE4E62',
              inactiveTintColor: 'rgba(100,100, 100, 0.8)',
              style: {
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },

      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
