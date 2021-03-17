import React from 'react';
import { View,Text, Button } from 'react-native';
import Firebase from '../config/config'


class HomeScreen extends React.Component{

    render(){
        return(
            <View>
                <Text>
                    Home
                </Text>
                <Button title="logout" onPress={()=>  Firebase.auth().signOut()}/>
            </View>
        )
    }
}

export default HomeScreen