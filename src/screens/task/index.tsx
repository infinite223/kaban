import React, { useState } from 'react'
import { taskStyles } from './taskStyles'
import { View, Text, TouchableOpacity, TextInput, FlatList, Dimensions, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import useAuth, { db } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import boardDataSlice, { selectBoardData, selectSelectedBoard } from '../../slices/boardDataSlice';
import { Card, UserInProject } from '../../utils/types';
import { Color } from '../../../GlobalStyles';
const widthScreen = Dimensions.get('screen').width

export const TaskScreen = () => {
    const route = useRoute<any>()
    const {taskData, id, idInThisArray} = route.params;
    const [showUserAdd, setShowUserAdd] = useState(false)
    const [title, setTitle] = useState('')
    const [descryption, setDescryption] = useState('')
    const selectedBoard = useSelector(selectSelectedBoard)
    const boardData = useSelector(selectBoardData)
    const { user }:any = useAuth()
    const navigation:any = useNavigation()
    const userRole = boardData[selectedBoard]?.users.find((_user:UserInProject) => _user.uid===user.uid )

    const idA = 0

    const addSubTask = async () => {
        if(title.length>0 && descryption.length>0){
            let newCards = boardData[selectedBoard].boardData[id].rows.filter((row:any) => row.id !== taskData.id) 
            console.log(newCards) 
            let newCard:Card = {
                id: taskData.id,
                description: taskData.description,
                deadline: taskData.deadline,
                subtasks: [...taskData.subtasks, {done:false, title, descryption, users: []}],
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
                    <View>
                        <Text style={taskStyles.titleSubtask}>
                            {item.title}
                        </Text>
                        <Text style={taskStyles.descriptionSubtask}>
                            {item.descryption}
                        </Text>
                    </View>
                    <FlatList
                        contentContainerStyle={{marginTop:5}}
                        horizontal
                        data={[user, user]}
                        renderItem={(user) => 
                            <TouchableOpacity style={{padding:5}}>
                                <Image 
                                    source={{uri: user.item.profileImage?.length>1?user.item.profileImage:"https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?pid=ImgDet&rs=1"}}
                                    style={{borderRadius:50, width:30, height:30}}
                                />
                                <Text style={{color:'gray'}}>{user.item.name}</Text>
                            </TouchableOpacity>
                        }
                        ListHeaderComponent={() => 
                            <TouchableOpacity 
                                onPress={() => setShowUserAdd(true)}
                                style={{
                                    marginRight:5,
                                    marginTop:5, padding:5, borderRadius:50 ,
                                    alignItems:'center', justifyContent:'center',
                                    width:30, height:30, 
                                    backgroundColor:'lightgray',
                                    display:(id!=='-1' && userRole?.roleInProject!=='Developer')?'flex':'none'
                                }}
                            >
                                <Text>+</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                {id!=='-1'&&<TouchableOpacity style={taskStyles.doneButton} onPress={() => updateSubTask(item)}>
                    <Text style={{fontSize:13, fontWeight:'bold'}}>
                        {item.done?'Incomplete':'Done'}
                    </Text>
                </TouchableOpacity>}
            </View>}
        />
         {(id!=='-1' && userRole?.roleInProject!=='Developer')&&<View style={taskStyles.footer}>
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
