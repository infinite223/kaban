import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Board, { Repository } from 'react-native-dnd-board';
import useAuth from './../../hooks/useAuth';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KanbanBoard } from './kanbanBoard/index';
import { Color } from '../../../GlobalStyles';

export const MainScreen = () => {
  setStatusBarBackgroundColor(Color.whitesmoke, true)
  const { startUser }: any = useAuth()
  const navigation:any = useNavigation()

 
  useEffect(() => {
    if(startUser) navigation.navigate('')
  }, [startUser])
  

  return (
    <View style={{ flex: 1 }}>
      <KanbanBoard/>
    </View>
  )
}
