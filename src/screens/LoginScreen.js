/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import Heading from '../components/Heading';
import {Input} from '../components/Input';
import {TextButton} from '../components/TextButton';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Login</Heading>
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input style={styles.input} placeholder={'Password'} secureTextEntry />
      <FilledButton
        title={'login'}
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
      />
      <TextButton
        onPress={() => navigation.navigate('Registration')}
        title={`Don't have Account? Create one`}
      />
      <Text style={{fontWeight: 'bold', ...styles.input}}>OR</Text>
      <Icon.Button name="google" backgroundColor="#4285f4" onPress={() => {}}>
        Login with Google
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    padding: 20,
  },
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 32,
  },
});

export default LoginScreen;
