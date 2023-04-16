import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

// import Board, { Repository } from 'react-native-dnd-board';
import useAuth, { db } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { FC, useState } from 'react';
import { Card } from '../../../utils/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { setCardTo } from '../../../slices/boardDataSlice';
import { useDispatch } from 'react-redux';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

export const CardItem:FC<{data:Card, id:number}> = ({data, id}) => {
  setStatusBarBackgroundColor('white', true)
  const { startUser, user }: any = useAuth()
  const navigation:any = useNavigation()
  const [showOptions, setShowOptions] = useState(false)
  const dispatch = useDispatch()

  const moveTo = async (to:number, from:number) => {
    console.log(from, to)
    await updateDoc(doc(db, "boards", user.projects[0]), {
      // 'boardData.'[0]+'.rows': arrayUnion(data)
      [`boardData.${from}.rows`]: arrayRemove(data)
    })

    await updateDoc(doc(db, "boards", user.projects[0]), {
      [`boardData.${to}.rows`]: arrayUnion(data)
    })

  } 

  const priority = parseInt(data.priority)
  console.log(new Date(data.deadline.toDate()).toDateString())
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Task', data)} onLongPress={() => setShowOptions(true)} style={style.container}>
      {/* header... */}
      <View style={style.headerContainer}>
        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <EvilIcons name='clock' size={30} color={'black'}/>
          <Text>{new Date(data.deadline.toDate()).toDateString()}</Text>
        </View>

        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <View style={style.proggressConatiner}>
            <View style={[style.proggressStatus, {width:40}]}/>
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
          {data.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, suscipit
        </Text>

      <View style={style.footerContainer}>
        <FlatList ItemSeparatorComponent={() =><View style={{width:10}}/>} horizontal data={data.tags} renderItem={({item, index}) => 
          <View key={index} style={[style.tag, {backgroundColor: item.color}]}>
            <Text style={{color:'white'}}>#{item.name}</Text>
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