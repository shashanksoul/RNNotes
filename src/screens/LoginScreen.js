import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, LogBox} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import Heading from '../components/Heading';
import {Input} from '../components/Input';
import {TextButton} from '../components/TextButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import SnackBar from 'react-native-snackbar-component';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateEmail, updatePassword, login,googleLogin, getUser} from '../redux/actions';

LogBox.ignoreLogs(['Animated: ']);

class LoginScreen extends React.Component {

  handleLogin = async () => {
    this.props.login();
  };

  render() {
    return (
      <View style={styles.container}>
        <Heading style={styles.title}>Login</Heading>
        <Input
          style={styles.input}
          placeholder={'Email'}
          onChangeText={(email) => this.props.updateEmail(email)}
          keyboardType={'email-address'}
        />
        <Input
          style={styles.input}
          onChangeText={(password) => this.props.updatePassword(password)}
          placeholder={'Password'}
          secureTextEntry
        />
        {this.props.isLoading ? (
          <ActivityIndicator
            size="small"
            style={{...styles.button, padding: 20}}
            color="purple"
          />
        ) : (
          <FilledButton
            title={'login'}
            style={styles.button}
            onPress={() => this.handleLogin()}
          />
        )}
        <TextButton
          onPress={() => this.props.navigation.navigate('Registration')}
          title={`Don't have Account? Create one`}
        />
        <Text style={{fontWeight: 'bold', ...styles.input}}>OR</Text>
        <Icon.Button name="google" backgroundColor="#4285f4" onPress={() => {this.props.googleLogin()}}>
          Login with Google
        </Icon.Button>
        <SnackBar
          visible={this.props.errorLogin!=undefined?true:false}
          textMessage={`${this.props.errorLogin}`}
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
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {updateEmail, updatePassword, login, googleLogin, getUser},
    dispatch,
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoading: state.user.loading,
    errorLogin: state.user.errorLogin,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
