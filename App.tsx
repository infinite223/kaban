import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      {/* <AuthProvider> */}
        <StackNavigation/>
      {/* </AuthProvider> */}
      </NavigationContainer>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
