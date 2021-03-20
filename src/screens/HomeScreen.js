import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';;

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button title="logout" onPress={() => auth().signOut()} />
      </View>
    );
  }
}

export default HomeScreen;
