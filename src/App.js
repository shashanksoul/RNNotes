/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import {Provider, useSelector, useStore} from 'react-redux';

import HomeStackNavigator from './navigators/HomeStackNavigator';
import {navigationRef} from '@react-navigation/native';

const RootStack = createStackNavigator();

function App() {
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isSignedIn === false ? (
          <RootStack.Screen name={'RootStack'} component={AuthStackNavigator} />
        ) : (
          <RootStack.Screen name={'HomeStack'} component={HomeStackNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
