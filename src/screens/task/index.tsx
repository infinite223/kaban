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
            {taskData.name}
        </Text>
        <Text style={taskStyles.description}>
            {taskData.description}
        </Text>
        <Text style={taskStyles.headerSubTasksText}>
            tasks: 
        </Text>
    </View>
  )
}
