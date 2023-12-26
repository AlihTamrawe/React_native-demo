import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image} from 'react-native';
export default function App() {
  const {text, onChangetext} = useState('useless text')
  console.log("hi i begin")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5} style={styles.text}  onPress={alert('yes im here')}>ali Tamrawe is  here now </Text>
      {/* <Image  source={require('./assets/ali.jpg')}/> */}
      <Image
      blurRadius={2}
      source={ 
        
        {
          width:300,
          height:200,
          uri:'https://picsum.photos/201'}}/>
      <Text>next text </Text>
      <TextInput 
       style={styles.input}
       onChangeText={onChangetext}
       value={text}
       /> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  input: {
    width:200,
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius:10
  },
  container: {
    flex: 1,
    backgroundColor: '#088',
    alignItems: 'center',
    left:2,
    justifyContent: 'center',
    
  },text:{
    padding:30,
    fontFamily:'serif',
    color:'red',
    textTransform: 'uppercase'

  }
});
