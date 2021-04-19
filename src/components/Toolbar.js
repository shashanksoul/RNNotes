import React from 'react';
import {StyleSheet, Text,View,TextInput, TouchableOpacity} from 'react-native'
import {CircularImage} from '../components/CircularImage';

export default function Toolbar({style,profileUrl,profilePress,onChangeText}){

    return(

        <View style={[style,styles.container]}>
        <TextInput onChangeText={onChangeText} maxLength={20} style={styles.textInput} placeholder="Search your notes" />
        <TouchableOpacity onPress={profilePress}>
         <CircularImage style={{right:5}} imageUrl={profileUrl} />
         </TouchableOpacity>
        </View>
        //<Text {...props} style={[styles.text,style]} >{children}</Text>

    )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        paddingHorizontal:10,
        paddingVertical:2,
        borderRadius:10,
        backgroundColor:'rgba(128,0,128,0.3)',
        flexDirection:'row',
        alignItems:'center',
        borderColor:'rgba(128,0,128,0.5)',
        borderWidth:1
    },
    textInput:{flex:1,}
})