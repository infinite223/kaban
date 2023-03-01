import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/stack';
import { StartScreen } from './src/screens/start';
import { DrawerNavigation } from './src/navigation/drawer';
import { AuthProvider } from './src/hooks/useAuth';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <AuthProvider>
        <StackNavigation/>
        {/* <StartScreen/> */}
      </AuthProvider>
      </NavigationContainer>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
