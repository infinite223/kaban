import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/stack';
import { StartScreen } from './src/screens/start';
import { DrawerNavigation } from './src/navigation/drawer';
import { AuthProvider } from './src/hooks/useAuth';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
        <AuthProvider>
          <StackNavigation/>
          {/* <StartScreen/> */}
        </AuthProvider>
        </NavigationContainer>
      </View>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
