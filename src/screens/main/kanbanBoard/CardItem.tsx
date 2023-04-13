import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

// import Board, { Repository } from 'react-native-dnd-board';
import useAuth from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { FC } from 'react';
import { Card } from '../../../utils/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { setCardTo } from '../../../slices/boardDataSlice';
import { useDispatch } from 'react-redux';

export const CardItem:FC<{data:Card}> = ({data}) => {
  setStatusBarBackgroundColor('white', true)
  const { startUser }: any = useAuth()
  const navigation:any = useNavigation()
  const dispatch = useDispatch()

  const priority = parseInt(data.priority)
  return (
    <TouchableOpacity onLongPress={() => dispatch(setCardTo({id: data.id, from:2, to:1}))} style={style.container}>
      {/* header... */}
      <View style={style.headerContainer}>
        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <EvilIcons name='clock' size={30} color={'black'}/>
          <Text>July 13</Text>
        </View>

        <View style={{alignItems:'center', flexDirection:'row', gap:5}}>
          <View style={style.proggressConatiner}>
            <View style={[style.proggressStatus, {width:40}]}/>
          </View>
          <View style={style.priority}>
            <MaterialIcons style={{position:'relative'}} name='keyboard-arrow-up' size={30} color={'black'}/>
            {priority>1&&<MaterialIcons style={{position:'relative', bottom:20}} name='keyboard-arrow-up' size={30} color={'black'}/>}
            {priority>2&&<MaterialIcons style={{position:'relative', bottom:20}} name='keyboard-arrow-up' size={30} color={'black'}/>}
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
  }
})