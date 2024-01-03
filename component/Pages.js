import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import Heading from './Heading.js';
import Section from './Section.js';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button,Platform, FlatList
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Pages() {
  return (
    <View>
      <Section>
        <Heading level={2}>main chart</Heading>
       
       </Section>


    <SafeAreaView style={styles.container}>
  
     <TouchableWithoutFeedback onPress={()=>{console.log(password)}} >

   <Image
      blurRadius={2}
      fadeDuration={2020}r
      source={ 
        
        {
          width:100,
          height:100,
          uri:'https://picsum.photos/207'}}/>

      </TouchableWithoutFeedback> 
      

 </SafeAreaView>
       </View>

  );
}


const styles = StyleSheet.create({
  // button: {
  //   padding: 40,
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   borderColor: 'green',
  //   backgroundColor: 'lightgreen',
  // },
  // inputPassword:{
  //   width:300,
  //   height: 30,
  //   margin: 5,
  //   borderWidth: 3,
  //   padding: 10,
  //   borderRadius:10,
  //   borderColor:'white',
  //   backgroundColor:'#ffe',
  
     
  // },
  // input: {
  //   width:300,
  //   height: 30,
  //   margin: 5,
  //   borderWidth: 3,
  //   padding: 10,
  //   borderRadius:10,
  //   borderColor:'#845966',
  //   backgroundColor:'#ffe'
  // },
  container: {
    
    flex: 1,
    backgroundColor: 'rgba(20, 26, 100, 0.8)',
    alignItems: 'center',
    left:2,
    justifyContent: 'center',
    
  }
 // ,text:{
  //   padding:30,
  //   fontFamily:'serif',
  //   color:'red',
  //   textTransform: 'uppercase'

  // }, item: {
  //   padding: 6,
  //   fontSize: 11,
  //   height: 20,
  // },
});
