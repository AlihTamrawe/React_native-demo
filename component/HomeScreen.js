import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

export default function HomeScreen() {
  
  return (
    <View>
          <Text  numberOfLines={5} style={styles.text} >ali Tamrawe is  here now </Text>
    </View>
  )

  
}
const styles = StyleSheet.create({
  inputPassword:{
    width:300,
    height: 30,
    margin: 5,
    borderWidth: 3,
    padding: 10,
    borderRadius:10,
    borderColor:'white',
    backgroundColor:'#ffe',
  
     
  },
  input: {
    width:300,
    height: 30,
    margin: 5,
    borderWidth: 3,
    padding: 10,
    borderRadius:10,
    borderColor:'#845966',
    backgroundColor:'#ffe'
  },
  container: {
    
    flex: 1,
    backgroundColor: 'rgba(20, 26, 100, 0.8)',
    // alignItems: 'center',
    // left:2,
    // justifyContent: 'center',
    
  },text:{
    padding:30,
    fontFamily:'serif',
    color:'red',
    textTransform: 'uppercase'

  }})
