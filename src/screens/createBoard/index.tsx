import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { startStyles, styles } from './startStyles'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../slices/messsageSlice';
import { BoardKanban } from '../../utils/types';
import uuid from 'react-native-uuid';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import useAuth, { db } from '../../hooks/useAuth';


export const CreateBoard = () => {
  const navigation:any = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const {user, setRef}:any = useAuth()
  const create = () => {
    if(name.length>1){
      const idBoard = uuid.v4().toString()
      const dataBoard:BoardKanban = {
        id:idBoard,
        name,
        users:[user],
        boardData: [
          {name:'To do', rows: []},
          {name:'In progress', rows: []},
          {name:'Done', rows: []}
        ],
        backgroundColor:'white'
      }

      setDoc(doc(db, 'boards', idBoard), dataBoard)

      updateDoc(doc(db, 'users', user.uid), {
        'projects': [idBoard]
      }).then(() => {
        setRef('s')
        navigation.navigate('Main')
      })
    }
    else {
      dispatch(setMessage({type:'ERROR', text:'Name is too short', show:true}))
    }
  }

  return (
   
    <View style={[styles.androidLarge1, styles.kabanParentFlexBox]}>
    <StatusBar backgroundColor={'white'} />

    <View style={[styles.kabanParent, styles.kabanParentFlexBox]}>
      <Text style={[styles.kaban, styles.kabanFlexBox]}>
        <Text style={styles.kabanTxt}>
          <Text style={styles.ka}>Ka</Text>
          <Text style={styles.ban}>Ban</Text>
          <Text style={styles.text}>.</Text>
        </Text>
      </Text>
      <Image
        style={[styles.undrawEngineeringTeamA7n2Icon, styles.mt37]}
        resizeMode="cover"
        source={require("../../assets/undraw-engineering-team-a7n2-1-1.png")}
      />
      <View style={styles.mt37}>
  
        <Text
          style={[{fontWeight:'bold', marginBottom:15}, styles.letsMakeManaging, styles.mt1, styles.text1Layout]}
        >
          Thank you and Welcome to KaBan!
        </Text>
        <Text
          style={[styles.letsMakeManaging, styles.mt1, styles.text1Layout]}
        >
          Let 's setup your first project together.
        </Text>
      </View>
      <View style={styles.mt37}>

        <Text style={styles.headerText}>Name your Workspace:</Text>
        <TextInput onChangeText={setName} style={styles.input} placeholder='Your Workspace name'/>
        <Text style={styles.shadowHelpText}>Don t worry, you can change it later.</Text>
        <Text style={styles.headerText}>Invite Team Members:</Text>
        <TextInput onChangeText={setEmail} style={styles.input} placeholder='Your Workspace name'/>
        <Text style={styles.shadowHelpText}>As many as you want.</Text>

        <TouchableOpacity
          style={[startStyles.signUpWithButton, styles.mt33]}
          onPress={create}
        >
          {/* <View style={[styles.groupChild, styles.groupLayout]} /> */}
          <Text
            style={[
              styles.signUpWith,
              // styles.signUpWithPosition,
              styles.text1Typo,
              styles.signUpWithTypo,
            ]}
          >
            Create project
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
}
