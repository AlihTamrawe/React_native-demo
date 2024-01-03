import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button,Platform, FlatList
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
      <View style={{flex: 2,      width: '80%',    backgroundColor: 'rgba(63, 80, 10, 0.3)',}} >
      {/* <Progress.CircleSnail size={50} endAngle={0.9} progress={1} color='red' showsText={true}></Progress.CircleSnail> */}
      <FlatList data={[
         {key: 'Devin'},
         {key: 'Dan'},
         {key: 'Dominic'},
         {key: 'Jackson'},
         {key: 'James'},
         {key: 'Joel'},
         {key: 'John'},
         {key: 'Jillian'},
         {key: 'Jimmy'},
         {key: 'Julie'},
      ]}   renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
      </View> 
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

  },
 
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
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

  }, item: {
    padding: 6,
    fontSize: 11,
    height: 20,
  },
});
