import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { FC } from 'react'
// import Board, { Repository } from 'react-native-dnd-board';

import { CardItem } from './CardItem';
import { Color } from '../../../../GlobalStyles';
import { useSelector } from 'react-redux';
import { selectBoardData } from '../../../slices/boardDataSlice';
import { Card } from '../../../utils/types';

interface TableProps {
    name: string,
    tableData:{name:string, id:string, rows:Card[]}
}

const widthScreen = Dimensions.get('window').width
export const TableItem:FC<TableProps> = ({tableData, name}) => {
  console.log(tableData)
  return (
    <View>
        <FlatList
            ListHeaderComponent={() => 
              <View>
                <Text style={style.headerText}>{name}</Text>
              </View>
            }
            style={style.tableContainer}
            contentContainerStyle={style.tableContent}
            data={tableData.rows}
            renderItem={({item, index}) => 
            <CardItem data={item} key={index}/>
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
    backgroundColor:'white',
  },
  tableContent: {
    borderRadius:5,
    margin:10
  }
})
