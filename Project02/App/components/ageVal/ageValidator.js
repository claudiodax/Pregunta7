import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const AgeVal = props => (
    <View>
        <TouchableOpacity style={styles.button} onPress={props.onPressAGE}>
            <Text> Comprobar Edad</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    button: {
        top: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding:10,
    },
});


export default AgeVal;