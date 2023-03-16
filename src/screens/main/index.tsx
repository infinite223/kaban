import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BoardComponent } from './BoardComponent';
import { mainStyles } from './mainStyles';
// import Board, { Repository } from 'react-native-dnd-board';
import { BoardHorisontal } from './BoardHorisontal';

export const MainScreen = () => {
  setStatusBarBackgroundColor('white', true)

  return (
    <BoardHorisontal/>
  )
      {/* <Text>na początek tabelki</Text> */}
      

}
