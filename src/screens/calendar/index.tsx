import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Pressable, Image } from 'react-native';
import { IMessage } from 'react-native-gifted-chat';
import { UserInProject } from '../../utils/types';
import { useNavigation } from '@react-navigation/native';
import useAuth, { db } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import boardDataSlice, { selectBoardData, selectSelectedBoard } from '../../slices/boardDataSlice';
import { Color } from '../../../GlobalStyles';
import { calendarStyles } from './chatStyles';
import CalendarPicker from 'react-native-calendar-picker';
import { useState } from 'react'


type Chanel = {
  name: string,
  id:string
}

const chanels:Chanel[] = [
  {name: 'Frontend', id:'1'},
  {name: 'Backend', id:'2'}
]

const messages:IMessage[] = [
  {_id:'1', createdAt: new Date, text: '', user: {_id:'', name:"", avatar: ''}},
  {_id:'2', createdAt: new Date, text: '', user: {_id:'', name:"", avatar: ''}},
]



export const CalendarScreen = () => {
  const navigation:any = useNavigation()
  const boardData = useSelector(selectBoardData)
  const selectedBoard = useSelector(selectSelectedBoard)
  const [startDate, setStartDate] = useState<any>(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const { user }:any = useAuth() 
  const userRole = boardData[selectedBoard]?.users.find((_user:UserInProject) => _user.uid===user.uid )
 

  return (
    <SafeAreaView style={calendarStyles.container}>
     <CalendarPicker
            onDateChange={(e) => {
              console.log(e.toDate())
              setStartDate(e.toDate())
              setShowCalendar(false)
            }}
            
          />
    </SafeAreaView>
  );
}
