import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button,Platform
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';

export default function HomeScreen() {
  
  // console.log(Platform)
  const [android,setandroid] = useState([])
  useEffect(()=>{
    axios.get('https://en.wikipedia.org/wiki/Android_version_history#:~:text=updates.%5B15%5D-,Name,-Internal%20codename%5B11').then((res)=>{
      if(res.data){
       }
    }).catch((err)=>{console.log(err)})

  }) 
  return (
    <View>
          <Text  numberOfLines={1} style={styles.text} >my device name is {(Platform.OS!="web")? Platform.constants.Model:Platform.OS} ali Tamrawe is  here now </Text>
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
