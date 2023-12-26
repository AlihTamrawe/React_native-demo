import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  console.log("hi i begin")
  return (
    <View style={styles.container}>
      <Text>ali Tamrawe is here now </Text>
      <Text>next text </Text>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#afe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
