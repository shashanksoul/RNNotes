import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';

export function CircularImage({imageUrl = undefined, style}) {
  return (
    <Image
      style={[styles.image, style]}
      source={
        imageUrl != undefined || imageUrl != null
          ? {uri: imageUrl}
          : require('../assets/defaultProfile.png')
      }
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});
