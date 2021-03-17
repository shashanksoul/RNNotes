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

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateEmail, updatePassword, signup} from '../redux/actions';

class RegistrationScreen extends React.Component {
  handleSignUp = () => {
    this.props.signup();
    //this.props.navigation.pop();
  };
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="times-circle"
          size={30}
          onPress={() => {
            this.props.navigation.pop();
          }}
          style={styles.closeIcon}
          color="purple"
        />
        <Heading style={styles.title}>Registration</Heading>
        <Input
          style={styles.input}
          placeholder={'Email'}
          autoCapitalize="none"
          onChangeText={(email) => this.props.updateEmail(email)}
          keyboardType={'email-address'}
        />
        <Input
          style={styles.input}
          onChangeText={(password) => this.props.updatePassword(password)}
          placeholder={'Password'}
          secureTextEntry
        />
        <FilledButton
          title={'Register'}
          style={styles.button}
          onPress={() => this.handleSignUp()}
        />
      </View>
    );
  }
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
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateEmail, updatePassword, signup}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
