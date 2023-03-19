import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BoardComponent } from './BoardComponent';
import { mainStyles } from './mainStyles';
// import Board, { Repository } from 'react-native-dnd-board';
import { BoardHorisontal } from './BoardHorisontal';
import useAuth from './../../hooks/useAuth';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const MainScreen = () => {
  setStatusBarBackgroundColor('white', true)
  const { startUser }: any = useAuth()
  const navigation:any = useNavigation()

 
  useEffect(() => {
    if(startUser) navigation.navigate('')
  }, [startUser])
  

  return (
    <BoardHorisontal/>
  )
      {/* <Text>na początek tabelki</Text> */}
      

}
