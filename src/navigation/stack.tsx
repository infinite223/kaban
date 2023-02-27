import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StartScreen } from './../screens/start/index';
import { LoginScreen } from './../screens/login/index';
import { RegisterScreen } from './../screens/register/index';
import { MainScreen } from './../screens/main/index';

export const StackNavigation = () => {

    const Stack = createNativeStackNavigator()
    const user = null

    return (
        <Stack.Navigator screenOptions={{}}>
            {user ?
                <>    
                    <Stack.Screen name='Main' component={MainScreen} options={{headerShown:false}}/>       
                </>:
                      <Stack.Group>
                        <Stack.Screen name='Start' component={StartScreen} options={{headerShown:false}}/>
                        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
                        <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/>
                      </Stack.Group>           
            } 
        </Stack.Navigator>
    );
}
  