import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import Heading from './Heading.js';
import Section from './Section.js';

export default function Pages() {
  return (
    <>
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>main chart</Heading>
        <Heading level={2}>story </Heading>
        <Heading level={2}>Heading</Heading>
       </Section>
       </Section>


    <SafeAreaView style={styles.container}>
  
    <NavigationContainer>
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
      

      </NavigationContainer>
 </SafeAreaView>
       </>

  );
}
