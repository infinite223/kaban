import React from 'react'
import { taskStyles } from './taskStyles'
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'

export const TaskScreen = () => {
    const route = useRoute<any>()
    const taskData = route.params;
    console.log(taskData)
  return (
    <View style={taskStyles.task}>
        <Text style={taskStyles.headerText}>
            {/* {taskData.name} */}
        </Text>
        <Text style={taskStyles.description}>
            {taskData.description}
        </Text>
        <Text style={taskStyles.headerSubTasksText}>
            tasks: 
        </Text>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt ratione nihil aut eveniet quas cupiditate enim ullam quod, architecto explicabo at, mollitia earum a non fugit labore eaque magni?
        </Text>
    </View>
  )
}
