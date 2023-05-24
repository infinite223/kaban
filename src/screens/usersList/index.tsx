import React, { useEffect, useState } from 'react'
import { FlatList, TouchableOpacity, Text } from 'react-native'
import { View } from 'react-native'
import { UserItem } from './UserItem'
import { User, UserInProject } from '../../utils/types'
import useAuth, { db } from '../../hooks/useAuth'
import { Header } from './Header';
import { useSelector } from 'react-redux'
import { selectBoardData, selectSelectedBoard } from '../../slices/boardDataSlice'
import { doc, updateDoc } from 'firebase/firestore'
import { Color } from '../../../GlobalStyles'
import { TextInput } from 'react-native-paper'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'

export const UsersList = () => {
    const { user }:any = useAuth()
    const boardData = useSelector(selectBoardData) 
    const selectedBoardData = useSelector(selectSelectedBoard) 
    const [showAddUser, setShowAddUser] = useState(false)
    const [email, setEmail] = useState('')
    const usersListData:UserInProject[] = boardData[selectedBoardData]?.users
    const userRole = boardData[selectedBoardData]?.users.find((_user:UserInProject) => _user.uid===user.uid )
    useEffect(() => {
      // const index = boardData[selectedBoardData].users.findIndex((user:UserInProject) => user===_user)

      const us = async () => {
        await updateDoc(doc(db, "boards", user.projects[selectedBoardData]), {
          [`users`]: [user]
        })
      }

      // us()
    }, [])

    const addUser = () => {

    } 

  return (
    <View style={{backgroundColor:'white', flex:1}}>
        <Header text='Users in project'/>
        <FlatList
            data={usersListData}
            renderItem={({item}) => <UserItem userData={item}/>}
        />

       {userRole?.roleInProject!=='Developer'&&
        !showAddUser?
          <TouchableOpacity 
            style={{
              backgroundColor:Color.crimson_100, borderRadius:50, 
              // padding:4,
              alignItems:'center', justifyContent:'center',
              width:60, height:60,
              position:'absolute', right:20, bottom:20,
              borderWidth:1, borderColor: 'lightgray'
            }}
            onPress={() => setShowAddUser(true)}
          >
            <Text style={{fontSize:25, color:'white'}}>+</Text>
          </TouchableOpacity>:
          <View style={{flexDirection:'row', alignItems:'center', backgroundColor:Color.whitesmoke}}>
            <TouchableOpacity onPress={() => setShowAddUser(false)}>
              <AntDesignIcon name='close' style={{paddingHorizontal:20}} size={20}/>
            </TouchableOpacity>
            <TextInput value={email} onChangeText={setEmail} style={{flex:1, backgroundColor:Color.whitesmoke, }} placeholder='Email'/>
            <TouchableOpacity onPress={() => addUser()}>
            <FeatherIcon name='send' style={{paddingHorizontal:20}} size={20}/>
            </TouchableOpacity>
          </View>
        }
    </View>
  )
}
