import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Firebase from '../config/config';
import { updateSignedState } from '../redux/actions'

class SplashScreen extends React.Component {
  componentDidMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.updateSignedState(true);
      } else {
        this.props.updateSignedState(false);
        this.props.navigation.replace("Login")
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Please wait..</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateSignedState}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.user.isSignedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
