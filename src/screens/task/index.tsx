import React, { useState } from 'react'
import { taskStyles } from './taskStyles'
import { View, Text, TouchableOpacity, TextInput, FlatList, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import useAuth, { db } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import boardDataSlice, { selectBoardData, selectSelectedBoard } from '../../slices/boardDataSlice';
import { Card } from '../../utils/types';
import { Color } from '../../../GlobalStyles';
const widthScreen = Dimensions.get('screen').width

export const TaskScreen = () => {
    const route = useRoute<any>()
    const {taskData, id, idInThisArray} = route.params;
    const [title, setTitle] = useState('')
    const [descryption, setDescryption] = useState('')
    const selectedBoard = useSelector(selectSelectedBoard)
    const boardData = useSelector(selectBoardData)
    const { user }:any = useAuth()
    const navigation:any = useNavigation()

    const idA = 0

    const addSubTask = async () => {
        if(title.length>0 && descryption.length>0){
            let newCards = boardData[selectedBoard].boardData[id].rows.filter((row:any) => row.id !== taskData.id) 
            console.log(newCards) 
            let newCard:Card = {
                id: taskData.id,
                description: taskData.description,
                deadline: taskData.deadline,
                subtasks: [...taskData.subtasks, {done:false, title, descryption}],
                tags: taskData.tags,
                priority: taskData.priority
            }

            newCards.push(newCard)
            await updateDoc(doc(db, "boards", user.projects[selectedBoard]), {
                [`boardData.${id}.rows`]: newCards
            })
            .then((e) => navigation.navigate('Main'))
            .finally(() => {
                setTitle('')
                setDescryption('')
            })
        }
    }

    const updateSubTask = async (subTask:any) => {
            let newCards = boardData[selectedBoard].boardData[id].rows.filter((row:any) => row.id !== taskData.id) 

            const newSubTasks = taskData.subtasks.filter((_subtask:any) => subTask!==_subtask)
            newSubTasks.push({done:!subTask.done, title: subTask.title, descryption: subTask.descryption})
            let newCard:Card = {
                id: taskData.id,
                description: taskData.description,
                deadline: taskData.deadline,
                subtasks: newSubTasks,
                tags: taskData.tags,
                priority: taskData.priority
            }

            newCards.push(newCard)

            await updateDoc(doc(db, "boards", user.projects[selectedBoard]), {
                [`boardData.${id}.rows`]: newCards
            })
            .then((e) => navigation.navigate('Main'))
            .finally(() => {

            })
        // }
    }


  return (
    <View style={taskStyles.task}>
        {/* <Text style={taskStyles.headerText}> */}
            {/* {taskData.name} */}
        {/* </Text> */}
        <Text style={taskStyles.description}>
            {taskData.description}
        </Text>
        <Text style={taskStyles.headerSubTasksText}>
            Subtasks: 
        </Text>

        <FlatList
            data={taskData.subtasks}
            renderItem={({item}) => <View style={[taskStyles.subtask, {backgroundColor:item.done?'rgba(11, 189, 23, .3)':Color.darkslategray_200, width:widthScreen-40}]}>
                <View style={{width:230}}>
                    <Text style={taskStyles.titleSubtask}>
                        {item.title}
                    </Text>
                    <Text style={taskStyles.descriptionSubtask}>
                        {item.descryption}
                    </Text>
                </View>
                {id!=='-1'&&<TouchableOpacity style={taskStyles.doneButton} onPress={() => updateSubTask(item)}>
                    <Text style={{fontSize:13, fontWeight:'bold'}}>
                        {item.done?'Incomplete':'Done'}
                    </Text>
                </TouchableOpacity>}
            </View>}
        />
         {id!=='-1'&&<View style={taskStyles.footer}>
                    <Text style={taskStyles.footerHeaderText}>Create subtask</Text>
            
                        <TextInput style={taskStyles.input} value={title} onChangeText={setTitle} placeholder='Title subtask'/>
                        <TextInput style={taskStyles.input} value={descryption} onChangeText={setDescryption} placeholder='Descryption subtask'/>

                    <TouchableOpacity style={taskStyles.createButton} onPress={addSubTask}>
                        <Text style={taskStyles.createButtonText}>Create</Text>
                    </TouchableOpacity>
            </View>}
        <Text>
        </Text>
    </View>
  )
}
