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
import { useEffect } from 'react'
import { ChatScreen } from './../screens/chat/index';
import { TaskScreen } from './../screens/task/index';
import { EditUser }  from '../screens/editUser';
import Settings from '../screens/settings';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Color } from '../../GlobalStyles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectStatusBar } from './../slices/statusBar';
import { BottomTabs } from './bottomTabs';
import { AddCardScreen } from '../screens/AddCard';
import { User } from '../utils/types';
import { CreateBoard } from '../screens/createBoard';
import { ResetPasswordScreen } from '../screens/resetPassword';
import { UsersList } from '../screens/usersList';
import { TimelineScreen } from '../screens/timeline';
import { CalendarScreen } from '../screens/calendar';

const Drawer = createDrawerNavigator();
function DrawerRoot({  }: any) {

  const { startUser, user }: any = useAuth()
  console.log(startUser)
  return (
    <>
      <Drawer.Navigator
        screenOptions={{ headerShown: false, drawerStyle: { width: 240 } }}
        initialRouteName={startUser?'EditUser':user.projects?.length>0?"Main":'CreateBoard'}
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
        <Drawer.Screen
          name='UsersList'
          component={UsersList}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name='TimelineScreen'
          component={TimelineScreen}
          options={{ headerShown: false }}
        />
         <Drawer.Screen
          name='Calendar'
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
         <Drawer.Screen
          name="AddCard"
          component={AddCardScreen}
          options={{ headerShown: false }}
        />
          <Drawer.Screen
            name="Task"
            component={TaskScreen}
            options={{ headerShown: false }}
            listeners={{
              drawerItemPress: (e) => {
              e.preventDefault();
              console.log(e, 'ssss')
            }}}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            // getComponent={}
            listeners={{
              beforeRemove: () => {
              },
              focus: () => {
                
              },
              drawerItemPress: (e) => {
              console.log(e, 'eee')
            }}}

            options={{ 
            }}
          />
      </Drawer.Navigator>
      <BottomTabs/>
    </>

  );
}

export const StackNavigation = () => {

    const Stack = createNativeStackNavigator()
    const { setUser, user }:any = useAuth()
    const statusBar = useSelector(selectStatusBar)
    
    return (
        <Stack.Navigator screenOptions={{}}>
            {user ?
                <>    
                  <Stack.Group >
                      <Stack.Screen name="DrawerRoot" component={DrawerRoot}  options={{headerShown:false, statusBarColor:statusBar}}/>
                    <Stack.Screen
                      name="EditUser"
                      component={EditUser}
                      options={{ 
                        headerShown: false,
                        statusBarColor: Color.crimson_100
                      }}
                    />
                     <Stack.Screen
                      name="CreateBoard"
                      component={CreateBoard}
                      options={{ 
                        headerShown: false,
                      }}
                    />
                  </Stack.Group>               
                </>:
                      <Stack.Group>
                        <Stack.Screen name='Start' component={StartScreen} options={{headerShown:false}}/>
                        <Stack.Screen name='Login' component={LoginScreen} 
                        options={{headerShown:false}}
                        />
                        <Stack.Screen name='ResetPass' component={ResetPasswordScreen} options={{headerShown:false}}/>
                        <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/>
                      </Stack.Group>           
            } 
        </Stack.Navigator>
    );
}
  