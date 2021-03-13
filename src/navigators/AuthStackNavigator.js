/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, StyleSheet} from 'react-native';
 import LoginScreen from '../screens/LoginScreen';
 import RegistrationScreen from '../screens/RegistrationScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 
 const AuthStack = createStackNavigator();
 
 function AuthStackNavigator() {
   return (
       <AuthStack.Navigator  screenOptions={{
        headerShown:false
    }} >
         <AuthStack.Screen   name={'Login'}  component={LoginScreen}  />
         <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
       </AuthStack.Navigator>
   );
 }
 
 export default AuthStackNavigator;
 