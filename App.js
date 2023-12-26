import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image ,   Button
} from 'react-native';
export default function App() {
  const [textb, onChangetext] = useState('useless text')
  console.log("hi i begin")
  const [count, setCount] = useState(0);

  function onPressLearnMore()  {
    setCount(count+1)
    alert(textb+'  '+count)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={5} style={styles.text}  onPress={console.log('hi')}>ali Tamrawe is  here now </Text>
      {/* <Image  source={require('./assets/ali.jpg')}/> */}
      <Image
      blurRadius={0}
      source={ 
        
        {
          width:300,
          height:200,
          uri:'https://picsum.photos/203'}}/>

<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#661985"
  accessibilityLabel="Learn more about this purple button"
/>
      <Text>next text </Text>
      <TextInput 
       style={styles.input}
       onChangeText={onChangetext}
       value={textb}
       /> 
       <Button
  onPress={() =>{setCount(0)}}
  title="Clear"
  color="#991985"
/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  input: {
    width:300,
    height: 100,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderRadius:10,
    borderColor:'#845966',
    backgroundColor:'#ffe'
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
