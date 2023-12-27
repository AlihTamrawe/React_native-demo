import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button
} from 'react-native';
export default function App() {
  const [textb, onChangetext] = useState('useless text')
  const [password, onChangepassword] = useState('password')

  console.log("hi i begin")
  const [count, setCount] = useState(0);

  function onPressLearnMore()  {
    setCount(count+1)
    alert(textb+'  '+count)
    
  }
  function onclear()  {
    setCount(0)

    alert( '  cleared')
    onChangetext('')
    onChangepassword('')
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text draga numberOfLines={5} style={styles.text} >ali Tamrawe is  here now </Text>
      {/* <Image  source={require('./assets/ali.jpg')}/> */}
      <TouchableWithoutFeedback onPress={()=>{console.log(password)}} >
      <Image
      blurRadius={2}
      fadeDuration={2020}
      source={ 
        
        {
          width:300,
          height:200,
          uri:'https://picsum.photos/207'}}/>

      </TouchableWithoutFeedback>
      
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
  onPress={onclear}
  title="Clear"
  color="#991985"
/>
<TextInput 
      style={styles.inputPassword}
      onChangeText={onChangepassword}
      password={true} 
      secureTextEntry={true}
      value={password}

       /> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
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
    textContentType:'newPassword',
    
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
