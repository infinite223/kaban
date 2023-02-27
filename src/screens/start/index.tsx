import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { startStyles } from './startStyles';

export const StartScreen = () => {
  return (
    <View style={startStyles.container}>
      <Text style={startStyles.h1Text}>Welcome to Kaban</Text>

      <View>
        {/* tu będzie jakieś losowe logo xd */}
      </View>
      

    <View style={startStyles.main}>
      <View style={startStyles.buttonsContainer}>
        <TouchableOpacity style={startStyles.button}>
            <Text style={startStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={startStyles.button}>
            <Text style={startStyles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>

      <Text style={startStyles.text}>
        Create free acount to start
      </Text>
  
      <TouchableOpacity style={startStyles.footer}>
        <Text style={startStyles.footerText}>
           -- About app --
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
