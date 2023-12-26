import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput } from 'react-native';
export default function App() {
  const {text, onChangetext} = useState('useless text')
  console.log("hi i begin")
  return (
    <View style={styles.container}>
      <Text>ali Tamrawe is here now </Text>
      <Text>next text </Text>
      <TextInput 
       style={styles.input}
       onChangeText={onChangetext}
       value={text}
       /> 
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    width:200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 2,
    backgroundColor: '#088',
    alignItems: 'center',
    left:2,
    justifyContent: 'center',
  },
});
