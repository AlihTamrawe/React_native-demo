import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput , SafeAreaView,Image , TouchableWithoutFeedback,  Button,FlatList, Platform,TouchableOpacity
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';


import * as Progress from 'react-native-progress';
import HomeScreen from './component/HomeScreen.js';
import Pages from './component/Pages.js';
const Stack = createNativeStackNavigator();
const fetchData = async () => {
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json()
  return data
}
const printData = async () => {
  try {
    const data = await fetchData()
    // console.log('Data', data['results'])
  } catch (error) {
    console.error('Problem', error)
  }
}
printData()
export default function App() {
  const [textb, onChangetext] = useState('useless text')
  const [password, onChangepassword] = useState('password')
  // console.log(Platform)
if (Platform.Version === 25) {
  console.log('Running on Nougat!');}
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
//     <SafeAreaView style={styles.container}>
//       <Text draga numberOfLines={5} style={styles.text} >ali Tamrawe is  here now </Text>
//       {/* <Image  source={require('./assets/ali.jpg')}/> */}
//       {/* <ProgressBar  progress={50}  margin={20} width={200} color={'red'} size={100} indeterminate={true} indeterminateAnimationDuration={2500}  /> */}
//       <Progress.Circle  size={200} progress={0.9} color='white' indeterminate={true} indeterminateAnimationDuration={2000}>
//       <Progress.Pie progress={0.36} size={50}  indeterminate={true} indeterminateAnimationDuration={2000} />
//         </Progress.Circle>  
      

//       <TouchableWithoutFeedback onPress={()=>{console.log(password)}} >

//       <Image
//       blurRadius={2}
//       fadeDuration={2020}r
//       source={ 
        
//         {
//           width:100,
//           height:100,
//           uri:'https://picsum.photos/207'}}/>

//       </TouchableWithoutFeedback>
      
// <Button
//   onPress={onPressLearnMore}
//   title="Learn More"
//   color="#661985"
//   accessibilityLabel="Learn more about this purple button"
// />
//       <Text>next text </Text>
//       <TextInput 
//        style={styles.input}
//        onChangeText={onChangetext}
//        value={textb}
//        /> 
//        <Button
//   onPress={onclear}
//   title="Clear"
//   color="#991985"
// />
// <Image
//       blurRadius={2}
//       fadeDuration={2020}
//       source={ 
        
//         {
//           width:70,
//           height:70,
//           uri:'https://picsum.photos/305'}}/>
// <TextInput 
//       style={styles.inputPassword}
//       onChangeText={onChangepassword}
//       password={true} 
//       secureTextEntry={true}
//       value={password}

//        /> 
//       <StatusBar style="auto" />
//       <NavigationContainer>
//         <Text value={'hallo'}/>
//       </NavigationContainer>
//     </SafeAreaView>
<NavigationContainer>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <HomeScreen >
      </HomeScreen>
      <View
style={[
  styles.container,
  {
    // Try setting `flexDirection` to `"row"`.
    flexDirection: 'column',
  },
]}>
    <View          onPress={()=>{console.log("presser")}} style={{flex: 3,   justifyContent:'center', alignItems:'center' ,margin:20, backgroundColor: 'lightgreen'}}>
      <Progress.Circle  size={100} progress={0.9} color='white' indeterminate={true} indeterminateAnimationDuration={2000}/>
      
      <Text style={{ flex:2, fontSize:44 ,padding:5 ,color:'red', right:25}} >        {count}
</Text>
    </View> 
    <View style={{flex: 2,     backgroundColor: 'rgba(20, 26, 70, 0.2)'}} >

    </View> 
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
</View>
        <Pages></Pages>
</NavigationContainer>
  );
}


const styles = StyleSheet.create({
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
