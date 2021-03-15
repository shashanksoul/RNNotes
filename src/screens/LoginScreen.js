

import React,{useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import Heading from '../components/Heading';
import {Input} from '../components/Input';
import {TextButton} from '../components/TextButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEmail, updatePassword, login, getUser } from '../redux/actions'




function LoginScreen({navigation}) {


  

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Login</Heading>
      <Input
        style={styles.input}
        placeholder={'Email'}
        onChangeText={(email) => this.props.updateEmail(email)}
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
        onChangeText={(email) => this.props.updateEmail(email)}
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


const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen)
