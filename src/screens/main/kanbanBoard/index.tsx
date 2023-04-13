import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

// import Board, { Repository } from 'react-native-dnd-board';
import useAuth from './../../../hooks/useAuth';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TableItem } from './Table';
import { Color } from '../../../../GlobalStyles';
import { useSelector } from 'react-redux';
import { selectBoardData } from '../../../slices/boardDataSlice';

export const KanbanBoard = () => {
  const { startUser }: any = useAuth()
  const navigation:any = useNavigation()
  const kanbanBoardData = useSelector(selectBoardData)
  // console.log(kanbanBoardData)

  return (
    <ScrollView 
        style={{ flex: 1 }}
        horizontal
        contentContainerStyle={{}}
    >
        <TableItem name="Todo" tableData={kanbanBoardData[0]}/>
        <TableItem name="In progress" tableData={kanbanBoardData[1]}/>
        <TableItem name="Done" tableData={kanbanBoardData[2]}/>
    </ScrollView>
  )
}
