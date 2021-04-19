import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateSignedState } from '../redux/actions'
import { log } from 'react-native-reanimated';
import Toolbar from '../components/Toolbar';

class HomeScreen extends React.Component {
  componentDidMount() {
    console.log(this.props.profileUrl);
  }

  render() {
    return (
      <View>
        <Toolbar profileUrl={this.props.profileUrl} profilePress={()=>console.log('press')} />
        <Button
          title="logout"
          onPress={ async () => {
              await auth().signOut();
             this.props.updateSignedState(false)
          }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({updateSignedState}, dispatch);
};

const mapStateToProps = (state) => {
  return {
    profileUrl: state.user.data.photoURL,
    userName: state.user.data.email,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
