import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StartScreen } from './../screens/start/index';
import { LoginScreen } from './../screens/login/index';
import { RegisterScreen } from './../screens/register/index';
import { MainScreen } from './../screens/main/index';
import MIcon from "react-native-vector-icons/MaterialIcons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { DrawerContent } from './drawerContext';
import useAuth from '../hooks/useAuth';
import { ChatScreen } from './../screens/chat/index';

const Drawer = createDrawerNavigator();
function DrawerRoot({ navigation }: any) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 240 } }}
      initialRouteName="Main"
      drawerContent={(props: any) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
        <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const [fontsLoaded, error] = useFonts({
    Lato: require("../assets/fonts/Lato.ttf"),
    Lato_regular: require("../assets/fonts/Lato_regular.ttf"),
    Lato_semibold: require("../assets/fonts/Lato_semibold.ttf"),
    Lato_bold: require("../assets/fonts/Lato_bold.ttf"),
    Lato_extrabold: require("../assets/fonts/Lato_extrabold.ttf"),
    Montserrat: require("../assets/fonts/Montserrat.ttf"),
    Montserrat_regular: require("../assets/fonts/Montserrat_regular.ttf"),
  });

  function MaterialIcon({ name, style }:{name:string, style:any}) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name:string | symbol) => ({
    toReactElement: (props:any) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

}
export const StackNavigation = () => {

    const Stack = createNativeStackNavigator()
    // const { user }:any = useAuth()
    const user = null
    //  {name: "xxdd"}
    return (
        <Stack.Navigator screenOptions={{}}>
            {user ?
                <>    
                  <Stack.Group>
                    {/* <Stack.Screen name='Main' component={MainScreen} options={{headerShown:false}}/>   */}
                    <Stack.Screen name="DrawerRoot" component={DrawerRoot} options={{headerShown:false}}/>
                  </Stack.Group>               
                </>:
                      <Stack.Group>
                        <Stack.Screen name='Start' component={StartScreen} options={{headerShown:false}}/>
                        <Stack.Screen name='Login' component={LoginScreen} 
                        options={{headerShown:false}}
                        />
                        <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/>
                      </Stack.Group>           
            } 
        </Stack.Navigator>
    );
}
  