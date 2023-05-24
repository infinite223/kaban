import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Color } from '../../../GlobalStyles';
import { User, UserInProject } from '../../utils/types';
import { getImageProfile } from '../../utils/getImageProfie';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import useAuth, { db } from '../../hooks/useAuth';
import { doc, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectBoardData, selectSelectedBoard } from '../../slices/boardDataSlice';

const data = [
    { label: 'Admin', value: '1' },
    { label: 'Scrum master', value: '2' },
    { label: 'Product owner', value: '3' },
    { label: 'Developer', value: '4' },
];

export const UserItem:FC<{userData:UserInProject}> = ({userData}) => {
    const [value, setValue] = useState<any>(data.find((item) =>  item.label === userData.roleInProject));
    const [isFocus, setIsFocus] = useState<any>(false);
    const { user }:any = useAuth()
    const boardData = useSelector(selectBoardData) 
    const selectedBoardData = useSelector(selectSelectedBoard) 
    console.log(userData)

    const removeUserFromProject = () => {
      
    }

    const updateUserPerm = async (label:string) => {
      const index = boardData[selectedBoardData].users.findIndex((user:UserInProject) => user===userData)

      const editUsers = boardData[selectedBoardData].users.map((user:UserInProject) => {
        if(user.uid === userData.uid){
          return {
            uid: user.uid,
            name: user.name,
            profileImage: user.profileImage,
            email: user.email,
            roleInProject: label
          }
        }
        else {
          return user
        } 
      })
      if(index!==-1){
        await updateDoc(doc(db, "boards", user.projects[selectedBoardData]), {
          [`users`]: editUsers
        })
      }

    }
    
  return (
    <View style={[styles.userItem, user.uid===userData.uid?{
      borderColor: Color.black, borderWidth:1 
    }:{}]}>
      <View style={{alignItems:'center', flexDirection:'row'}}>
        <Image 
          source={{uri: getImageProfile(userData.profileImage)}} 
          style={styles.profileImage}
        />
        <Text style={styles.userName}>
          {userData.name}
        </Text>
      </View>
      <View style={{alignItems:'center', flexDirection:'row'}}>
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          itemTextStyle={{fontSize:12}}
          data={data}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            updateUserPerm(item.label);
          }}
          renderLeftIcon={() => (
            <View>
           
            </View>
          )}
        />
        <TouchableOpacity>
          <EntypoIcon name='trash' size={20} style={{marginHorizontal:10}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    userItem: {
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:Color.whitesmoke,
        borderRadius:10,
        marginHorizontal:15,
        marginVertical:5,
        justifyContent:'space-between'
    },
    profileImage: {
      margin:10, 
      borderRadius:50, 
      width:35, 
      height:35
    },
    userName: {
      fontSize:16
    },
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 35,
      width:160,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 13,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });