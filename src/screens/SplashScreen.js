import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { checkUserSignedIn } from '../redux/actions'

class SplashScreen extends React.Component {
  componentDidMount() {
    this.props.checkUserSignedIn()
    setTimeout(()=>{
      if(!this.props.isSignedIn){
        this.props.navigation.replace('Login');
       }
    },100)
   
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
  return bindActionCreators({checkUserSignedIn}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.user.isSignedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
