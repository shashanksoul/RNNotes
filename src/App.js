/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';
import HomeStackNavigator from './navigators/HomeStackNavigator';
import {navigationRef} from '@react-navigation/native'
import Firebase from './config/config'

const RootStack = createStackNavigator();

function App() {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				//this.props.getUser(user.uid)
				//navigation.navigate('HomeStack', { screen: 'Home' });
        setSignedIn(true)
				
			}else{
        console.log("No user found");
      }
		})
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {signedIn === false ? (
            <RootStack.Screen
              name={'RootStack'}
              component={AuthStackNavigator}
            />
          ) : (
            <RootStack.Screen
              name={'HomeStack'}
              component={HomeStackNavigator}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
