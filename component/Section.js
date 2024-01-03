import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button,Platform, FlatList
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';

export default function Section({ children }) {
    return (
      <section className="section">
        <Text>{children}</Text>
      </section>
    );
  }