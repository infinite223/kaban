import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';

// import Board, { Repository } from 'react-native-dnd-board';
import useAuth, { db } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { FC, useEffect, useState } from 'react';
import { Card, User } from '../../../utils/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { setCardTo } from '../../../slices/boardDataSlice';
import { useDispatch } from 'react-redux';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectSelectedBoard } from '../../../slices/boardDataSlice';

export const CardItem:FC<{data:Card, id:number, idInThisArray:number}> = ({data, id, idInThisArray}) => {
  setStatusBarBackgroundColor('white', true)
  const { startUser, user }: any = useAuth()
  const navigation:any = useNavigation()
  const [showOptions, setShowOptions] = useState(false)
  const selectedBoard = useSelector(selectSelectedBoard)

  const moveTo = async (to:number, from:number) => {
    console.log(user.projects, to, selectedBoard)
    await updateDoc(doc(db, "boards", user.projects[selectedBoard]), {
      // 'boardData.'[0]+'.rows': arrayUnion(data)
      [`boardData.${from}.rows`]: arrayRemove(data)
    })

    await updateDoc(doc(db, "boards", user.projects[selectedBoard]), {
      [`boardData.${to}.rows`]: arrayUnion(data)
    })

  } 


  const getUsersInCard = () => {
    const usersInCard:any[] = []
    data.subtasks.forEach((subTask) => {
      subTask.users?.forEach((Iuser) => {
        console.log(Iuser)
        if(!usersInCard.find((_user:User) => Iuser.uid ===_user.uid)){
          usersInCard.push(Iuser)
        }
      })
    })

    return usersInCard
  } 


  const priority = parseInt(data.priority)
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Task', {taskData:data, id, idInThisArray})} 
      onLongPress={() => setShowOptions(!showOptions)} style={style.container}>
      {/* header... */}
      <View style={style.headerContainer}>
        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <EvilIcons name='clock' size={30} color={'black'}/>
          <Text>{new Date(data.deadline.toDate()).toDateString()}</Text>
        </View>

        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <View style={style.proggressConatiner}>
            {data.subtasks.length>0&&<View style={[style.proggressStatus, {width:((data?.subtasks?.filter((subtask) => subtask.done === true )).length * 100)/data.subtasks.length}]}/>}
              {data.subtasks.length>0?<Text style={{position:'absolute', left:35, bottom:4}}>{(data?.subtasks?.filter((subtask) => subtask.done === true )).length} / {data.subtasks.length}</Text>:<Text style={{position:'absolute', left:48, bottom:4}}>0</Text>}  

          </View>
          <View style={style.priority}>
            <MaterialIcons style={{position:'relative'}} name='keyboard-arrow-up' size={30} color={'black'}/>
            {priority>1&&<MaterialIcons style={{position:'relative', bottom:20}} name='keyboard-arrow-up' size={30} color={'black'}/>}
            {priority>2&&<MaterialIcons style={{position:'relative', bottom:40}} name='keyboard-arrow-up' size={30} color={'black'}/>}
          </View>
        </View>
      </View>
      {/* ...header */}

        <Text style={style.title}>
          {data.description}
        </Text>

      <View style={style.footerContainer}>
        {data.tags.length>0&&<FlatList contentContainerStyle={{width:200}} ItemSeparatorComponent={() =><View style={{width:10}}/>} horizontal data={data.tags} renderItem={({item, index}) => 
          <View key={index} style={[style.tag, {backgroundColor: item.color}]}>
            <Text style={{color:'white'}}>{item.name.length>0&&'#'}{item.name}</Text>
          </View>}
        />}
        <FlatList
          data={getUsersInCard()}
          contentContainerStyle={{alignItems:'flex-end', justifyContent:'flex-end', width:130}}
          horizontal
          renderItem={({item}) =>  
          <View style={{padding:5}}>
              <Image 
                  source={{uri: item?.profileImage?.length>1?item?.profileImage:"https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?pid=ImgDet&rs=1"}}
                  style={{borderRadius:50, width:40, height:40}}
              />
              <Text style={{color:'black'}}>{item?.name}</Text>
          </View>}
        />
      </View>
      {showOptions&&
        <View style={style.modal}>
          <TouchableOpacity style={style.modalButton} onPress={() => moveTo(0, id)}>
            <Text style={style.textButton}>Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.modalButton} onPress={() => moveTo(1, id)}>
            <Text style={style.textButton}>
              In progress
            </Text></TouchableOpacity>
          <TouchableOpacity style={style.modalButton}  onPress={() => moveTo(2, id)}>
            <Text style={style.textButton}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      }
    </TouchableOpacity>
  )
}

const style =StyleSheet.create({
    container: {
      backgroundColor:'rgba(20, 20, 20, .05)',
      margin:10,
      borderRadius:10,
    },
    headerContainer: {
      flexDirection:'row',
      padding:10,
      alignItems:'center',
      justifyContent:'space-between',
      gap:10
    },
    proggressConatiner: {
      borderRadius:50,
      backgroundColor:'rgba(20, 20, 20, .1)',
      width:100,
      height:26,
      position:'relative'
    },
    proggressStatus: {
      height:26,
      borderRadius:50,
      backgroundColor:'rgba(100, 250, 120, 1)',
      justifyContent:'center',
      alignItems:'center'
    },
    title: {
      color:'black',
      margin:10,
      fontSize:16,
      paddingHorizontal:5
    },
    footerContainer: {
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:10
    },
    tag: {
      borderRadius:5,
      paddingHorizontal:10,
      paddingVertical:5,
      marginVertical:10,
      // height:40,
  },
  priority: {
    position:'relative',
    height:40
  },
  modal: {
    position:'absolute',
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(250, 250, 250, .8)',
    borderRadius:10,
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    justifyContent:'center'
  },
  modalButton: {
    padding:10,
    borderRadius:5,
    backgroundColor:'rgba(200, 200, 200, .7)',
  },
  textButton: {
    fontSize:15,
    letterSpacing:1  }
})