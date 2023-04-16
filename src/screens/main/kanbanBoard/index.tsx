import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

// import Board, { Repository } from 'react-native-dnd-board';
import useAuth, { db } from './../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TableItem } from './Table';
import { Color } from '../../../../GlobalStyles';
import { useSelector } from 'react-redux';
import { selectBoardData } from '../../../slices/boardDataSlice';
import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore';

export const KanbanBoard = () => {
  const { startUser }: any = useAuth()
  const navigation:any = useNavigation()
  const {user, setUser}:any = useAuth()
  // const kanbanBoardData = useSelector(selectBoardData)
  const [kanbanBoardData, setKanbanBoardData] = useState<any>([])
  // console.log(kanbanBoardData[0]?.rows, 'xdd')
  useEffect(() => {
    const getDataUser = async () => {
      const userData = await getDoc(doc(db, 'users', user.uid))
      // console.log(userData.data(),' tuuu')
      if(userData.data()){
        setUser(userData.data())
      }
 

      if (user.projects?.length===0) {
        navigation.navigate('CreateBoard')
      }
    }
    getDataUser() 
  },[])

  useEffect(() => {
    if(user.projects?.[0]){
      const unsub = onSnapshot(doc(db, "boards", user.projects?.[0]), (doc) => {
        console.log("Current data: ", doc.data());
        setKanbanBoardData(doc.data()?.boardData)
    })
    
    return unsub
    }
  
  },[user, setUser])

  return (
    <ScrollView 
        style={{ flex: 1 }}
        horizontal
        contentContainerStyle={{}}
    >
        <TableItem name="Todo" id={0} tableData={kanbanBoardData[0]}/>
        <TableItem name="In progress" id={1} tableData={kanbanBoardData[1]}/>
        <TableItem name="Done" id={2} tableData={kanbanBoardData[2]}/>
    </ScrollView>
  )
}
