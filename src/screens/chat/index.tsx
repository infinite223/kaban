import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { chatStyles } from './chatStyles';

export const ChatScreen = () => {
  return (
    <View style={chatStyles.container}>
      <Text>tu będzie chat</Text>
    </View>
  );
}
