import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

// import Board, { Repository } from 'react-native-dnd-board';
import useAuth, { db } from './../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TableItem } from './Table';
import { Color } from '../../../../GlobalStyles';
import { useSelector } from 'react-redux';
import { selectBoardData, selectSelectedBoard, setBoard } from '../../../slices/boardDataSlice';
import { collection, doc, getDoc, onSnapshot, query, setDoc, where } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

export const KanbanBoard = () => {
  const { startUser }: any = useAuth()
  const navigation:any = useNavigation()
  const {user, setUser}:any = useAuth()
  const dispatch = useDispatch()
  const kanbanboardsData = useSelector(selectBoardData) 
  const selectedBoard = useSelector(selectSelectedBoard)
  // const [kanbanBoardData, setKanbanBoardData] = useState<any>(
  //   kanbanboardsData[selectedBoard].boardData
    
  // )
  console.log(kanbanboardsData[0], 'xd')
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
      const boardsRef = collection(db, "boards");

      const q = query(boardsRef, where("usersUid", "array-contains", user.uid));


      const unsub = onSnapshot(q, (res) => {

        console.log("Current data: ", res.docs, user.uid);
        //  setKanbanBoardData(res.docs[0].data()?.boardData)
        dispatch(setBoard(res.docs.map((doc) => {
          return doc.data()
        })))
    })
    
    return unsub
    }
  
  },[user, setUser])

  const kanbanBoardData = (kanbanboardsData && kanbanboardsData[selectedBoard]) && kanbanboardsData[selectedBoard].boardData

  return (
    <ScrollView 
        style={{ flex: 1 }}
        horizontal
        contentContainerStyle={{}}
    >
        {kanbanBoardData&&<TableItem name="Todo" id={0} tableData={kanbanBoardData[0]}/>}
        {kanbanBoardData&&<TableItem name="In progress" id={1} tableData={kanbanBoardData[1]}/>}
        {kanbanBoardData&&<TableItem name="Done" id={2} tableData={kanbanBoardData[2]}/>}
    </ScrollView>
  )
}
