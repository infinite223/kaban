import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { loginStyles } from './loginStyles';

export const LoginScreen = () => {
  return (
    <View style={loginStyles.container}>
      <Text>Login</Text>
    </View>
  );
}
