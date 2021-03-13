/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';


const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{
           headerShown:false
       }}>
        <RootStack.Screen   name={'RootStack'}  component={AuthStackNavigator}  />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
