import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button
} from 'react-native';

import * as Progress from 'react-native-progress';
 

export default function App() {
  const [textb, onChangetext] = useState('useless text')
  const [password, onChangepassword] = useState('password')

  console.log("hi i begin")
  const [count, setCount] = useState(0);

  function onPressLearnMore()  {
    setCount(count+1)
    alert(textb+'  '+count+' u pass  '+password )
    
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
      {/* <ProgressBar  progress={50}  margin={20} width={200} color={'red'} size={100} indeterminate={true} indeterminateAnimationDuration={2500}  /> */}
      <Progress.Circle  size={30} progress={0.9} color='white' indeterminate={true} indeterminateAnimationDuration={2000}  />
      <Progress.Pie progress={0.36} size={50}  indeterminate={true} indeterminateAnimationDuration={2000} />

      <TouchableWithoutFeedback onPress={()=>{console.log(password)}} >

      <Image
      blurRadius={2}
      fadeDuration={2020}r
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
<Image
      blurRadius={2}
      fadeDuration={2020}
      source={ 
        
        {
          width:300,
          height:200,
          uri:'https://picsum.photos/305'}}/>
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
    backgroundColor: 'rgba(52, 52, 8, 0.8)',
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
