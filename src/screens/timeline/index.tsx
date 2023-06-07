import { View, Text, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Timeline from 'react-native-timeline-flatlist'
import { Header } from '../usersList/Header'
import { useSelector } from 'react-redux'
import { selectBoardData, selectSelectedBoard } from '../../slices/boardDataSlice'
import { Color } from '../../../GlobalStyles'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const customData = [
  {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',lineColor:'#009688'},
  {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.'},
  {time: '12:00', title: 'Lunch'},
  {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688'},
  {time: '12:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'}
]

export const TimelineScreen = () => {
  const navigation:any = useNavigation()
  const boardData = useSelector(selectBoardData) 
  const selectedBoardData = useSelector(selectSelectedBoard) 
  const [sortedTime, setSortedTime] = useState(false)

  const _data = boardData[selectedBoardData]?.boardData[0]?.rows.concat(boardData[selectedBoardData]?.boardData[1]?.rows).concat(boardData[selectedBoardData]?.boardData[2]?.rows)
  
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const sortedDataDown = _data?.sort((a:any, b:any) => {
      if(a && a.deadline && b && b.deadline){
        return sortedTime?a?.deadline - b?.deadline:b?.deadline - a?.deadline;
      }
      else {
        return []
      }
    }); 

    const dataToShowDown = sortedDataDown?.map((row:any) => {
      return {
        time:row?.deadline.toDate().toDateString(),
        title:row.description,
        description:'',
        taskData:row,

      }
    })

    setData(dataToShowDown)
  
  }, [sortedTime, selectedBoardData, boardData])


  return (
    <View style={{flex:1, backgroundColor:'white', paddingTop:Platform.OS === 'ios'?20:0}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <Header text='Timeline'/>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity style={{marginHorizontal:20}} onPress={() => setSortedTime(!sortedTime)}>
              <EntypoIcon name='back-in-time' size={22}/>
            </TouchableOpacity>
          </View>
        </View>

        <Timeline
          style={{marginHorizontal:10, marginTop:10}}
          data={data}
          timeStyle={{maxWidth:100}}
          titleStyle={{marginVertical:2, marginHorizontal:0, padding:10, fontSize:15, fontWeight:'500', borderRadius:5, backgroundColor: Color.whitesmoke}}
          circleColor={Color.crimson_100}
          circleStyle={{marginLeft:0}}
          lineColor={Color.crimson_100}
          renderFullLine
          onEventPress={(e:any) => {
            navigation.navigate('Task', {taskData:e.taskData, id: '-1', idInThisArray:'-1'})
          }}
          circleSize={10}
          descriptionStyle={{display:'none'}}
        />
    </View>
  )
}
