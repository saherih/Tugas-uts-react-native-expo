import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Erry App</Text>
      
      <View>
        <Text style={styles.text}>Welcome in Erry App!</Text>
        
      </View>
      
      <Button
        title="Submit" 
        onPress={() => {
          navigation.navigate('Profile')
        }}
      />
      <Button
        title="Logout" 
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 25
  },
  subtitle: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    alignItems: 'flex-start'
  }
});