/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { View ,StyleSheet} from 'react-native';
 
 function LoginScreen(){
 
   return(
     <View style={styles.container}>
       <Text>
         Welcome to App.
       </Text>
     </View>
   )
 }
 
 const styles= StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
   }
 })
 
 export default LoginScreen;
 