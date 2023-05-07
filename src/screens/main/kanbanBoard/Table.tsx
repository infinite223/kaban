import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { FC, useState } from 'react'
// import Board, { Repository } from 'react-native-dnd-board';

import { CardItem } from './CardItem';
import { Color } from '../../../../GlobalStyles';
import { useSelector } from 'react-redux';
import { selectBoardData, selectSelectedBoard } from '../../../slices/boardDataSlice';
import { Card } from '../../../utils/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ColorPickerModal } from '../../AddCard/ColorPickerModal';
import { doc, updateDoc } from 'firebase/firestore';
import useAuth, { db } from '../../../hooks/useAuth';

interface TableProps {
    name: string,
    tableData:{name:string, id:string, rows:Card[]},
    id:number,
    setShowColorPicker:(value:boolean) => void,
    showColorPicker:boolean
}

const widthScreen = Dimensions.get('window').width
export const TableItem:FC<TableProps> = ({tableData, name, id, setShowColorPicker, showColorPicker}) => {
  const [sorted, setSorted] = useState(false)
  const {user}:any = useAuth()
  const selectedBoard = useSelector(selectSelectedBoard)

  let sortedRows_ = tableData?.rows.slice().sort((a, b) => {
    return parseInt(a.priority) - parseInt(b.priority);
  });  

  let sortedRows__ = tableData?.rows.slice().sort((a, b) => {
    return  parseInt(b.priority) - parseInt(a.priority);
  });  

  const updateBackground = async (color:string) => {
    await updateDoc(doc(db, "boards", user.projects[selectedBoard]), {
      'backgroundColor': color
    })
  }

  return (
    <View>
        {showColorPicker&&
        <View style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'gray', zIndex:11, alignItems:'center', justifyContent:'center'}}>
          <ColorPickerModal setColor={updateBackground} showColorPicker={showColorPicker} setShowColorPicker={setShowColorPicker}/>
        </View>}
        <FlatList
            ListHeaderComponent={() => 
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={style.headerText}>{name}</Text>

                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <TouchableOpacity style={{marginRight:5, padding:10, backgroundColor:Color.lightslategray_200, borderRadius:50}} onPress={() => setSorted(!sorted)}>
                    <Text>Sort</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginHorizontal:8}} onPress={() => setShowColorPicker(true)}>
                    <Ionicons name='color-palette' size={22}/>
                  </TouchableOpacity>
                </View>
              </View>
            }
            style={[style.tableContainer]}
            contentContainerStyle={style.tableContent}
            data={sorted?sortedRows__:sortedRows_}
            renderItem={({item, index}) => 
            <CardItem data={item} id={id} key={index} idInThisArray={index}/>
          }
        />
    </View>
  )
}

const style = StyleSheet.create({
  headerText: {
    fontSize:25,
    fontWeight:'bold',
    margin:10
  },
  tableContainer: {
    height:200, 
    width:widthScreen, 
    // backgroundColor:'white',
  },
  tableContent: {
    borderRadius:5,
    margin:10
  }
})
