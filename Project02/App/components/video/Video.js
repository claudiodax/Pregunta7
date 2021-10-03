import React from 'react';
import Video from 'react-native-video';
import {StyleSheet,View,Text} from 'react-native';

export default function PlayIt({ navigation }) {
  const video = 'https://www.w3schools.com/html/mov_bbb.mp4';
  return (
    <View>
      <Video 
      controls
      resizeMode='cover'
      source={{uri: video}}
      style={{width:'100%',height:'50%',backgroundColor:'black',top: 0,left: 0,bottom: 0,right: 0}} />
    </View>
      
  );
}
