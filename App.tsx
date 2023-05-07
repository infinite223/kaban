import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigation } from './src/navigation/stack';
import { StartScreen } from './src/screens/start';
import { DrawerNavigation } from './src/navigation/drawer';
import { AuthProvider } from './src/hooks/useAuth';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react'
import { MessageBox } from './src/components/MessageBox';
import { useFonts } from "expo-font";
import { LoadingView } from './src/components/LoadingView';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state', ]);

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Lato: require("./src/assets/fonts/Lato.ttf"),
    Lato_regular: require("./src/assets/fonts/Lato_regular.ttf"),
    Lato_medium: require("./src/assets/fonts/Lato_medium.ttf"),
    Lato_semibold: require("./src/assets/fonts/Lato_semibold.ttf"),
    Lato_bold: require("./src/assets/fonts/Lato_bold.ttf"),
    Lato_extrabold: require("./src/assets/fonts/Lato_extrabold.ttf"),
    Roboto: require("./src/assets/fonts/Roboto.ttf"),
    Roboto_regular: require("./src/assets/fonts/Roboto_regular.ttf"),
    Montserrat: require("./src/assets/fonts/Montserrat.ttf"),
    Montserrat_regular: require("./src/assets/fonts/Montserrat_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LoadingView/>
        <MessageBox/>
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
