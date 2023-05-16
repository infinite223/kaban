import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Card, Tag } from '../../utils/types'
import { ColorPickerModal } from './ColorPickerModal';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import useAuth, { db } from '../../hooks/useAuth';
import {
  TextInput as RNPTextInput,
  Checkbox as RNPCheckbox,
} from "react-native-paper";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import { useSelector } from 'react-redux';
import { selectSelectedBoard } from '../../slices/boardDataSlice';

export const AddCardScreen = () => {
  const [tags, setTags] = useState<Tag[]>([])
  // const [name, setName] = useState('')
  const [nameTag, setNameTag] = useState('')
  const [description, setDescription] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const { user }: any = useAuth()
  console.log(user, 'cardd')
  const [tag1Checked, setTag1Checked] = useState(false)
  const [tag2Checked, setTag2Checked] = useState(false)
  const [tag3Checked, setTag3Checked] = useState(false)
  const [tag4Checked, setTag4Checked] = useState(false)

  const [tag1name, setTag1name] = useState('')
  const [tag2name, setTag2name] = useState('')
  const [tag3name, setTag3name] = useState('')
  const [tag4name, setTag4name] = useState('')
  const [priority, setPriority] = useState(1)

  const [tag1Color, setTag1Color] = useState('')
  const [tag2Color, setTag2Color] = useState('')
  const [tag3Color, setTag3Color] = useState('')
  const [tag4Color, setTag4Color] = useState('')
  const [startDate, setStartDate] = useState<any>(new Date())
  const [showCalendar, setShowCalendar] = useState(false)

  const [editTag, setEditTag] = useState(0)



  const dispatch = useDispatch()
  const selectedBoard = useSelector(selectSelectedBoard)

  const navigation:any = useNavigation()

  const add = async() => {
    if(description.length>0){
      const newCard:Card = {
        id: uuid.v4().toString(),
        priority:priority.toString(),
        subtasks:[],
        description,
        deadline: startDate,
        tags: [
          {name: tag1name, color:tag1Color},
          {name: tag2name, color:tag2Color},
          {name: tag3name, color:tag3Color},
          {name: tag4name, color:tag4Color},
        ]
      }
  
      await updateDoc(doc(db, "boards", user.projects[selectedBoard]), {
        "boardData.0.rows": arrayUnion(newCard)
      })
  
      // dispatch(setNewCard(newCard))
      setTags([])
      setDescription('')
  
      navigation.navigate('Main')
    }
  }

  const _editTag = (color:string) => {
    setShowColorPicker(true)
    editTag===1&&setTag1Color(color)
    editTag===2&&setTag2Color(color)
    editTag===3&&setTag3Color(color)
    editTag===4&&setTag4Color(color)
    setEditTag(0)
  }
  // console.log(startDate)
  return (
    <View style={styles.container}>
      {/* <ColorPickerModal setShowColorPicker={setShowColorPicker} showColorPicker={showColorPicker} name={nameTag} setTags={setTags} tags={tags}/> */}
      {editTag!==0&&<ColorPickerModal setShowColorPicker={setShowColorPicker} showColorPicker={showColorPicker} setColor={_editTag}/>}

      <View style={styles.main}>
        <Text style={styles.headerText}>Create new card</Text>
        {/* <TextInput onChangeText={setName} style={styles.input} placeholder='Name card'/> */}
        <Text style={styles.sectionText}>Description:</Text>
        <TextInput textAlignVertical='top' onChangeText={setDescription} numberOfLines={2}  style={[styles.input, {marginTop:10, height:50}]} placeholder='Description card'/>
        
        <Text style={styles.sectionText}>Tags: </Text>
        <View style={styles.tagContainer}>
          <RNPCheckbox
            status={!tag1Checked ? "checked" : "unchecked"}
            onPress={() => setTag1Checked(!tag1Checked)}
            color="#23a6f0"
          />
            <TextInput onChangeText={setTag1name} style={[styles.input, {flex:1}]} placeholder='Insert your tag here'/>
            <TouchableOpacity onPress={() => setEditTag(1)} style={{borderRadius:10, marginLeft:10, backgroundColor:tag1Color}}>
              <AntDesign name='edit' size={20} style={styles.editIcon}/>
            </TouchableOpacity>
        </View>

        <View style={styles.tagContainer}>
          <RNPCheckbox
            status={!tag2Checked ? "checked" : "unchecked"}
            onPress={() => setTag2Checked(!tag2Checked)}
            color="#23a6f0"
          />
            <TextInput onChangeText={setTag2name} style={[styles.input, {flex:1}]} placeholder='Insert your tag here'/>
            <TouchableOpacity onPress={() => setEditTag(2)} style={{borderRadius:10, marginLeft:10, backgroundColor:tag2Color}}>
              <AntDesign name='edit' size={20} style={styles.editIcon}/>
            </TouchableOpacity>
        </View>

        <View style={styles.tagContainer}>
          <RNPCheckbox
            status={!tag3Checked ? "checked" : "unchecked"}
            onPress={() => setTag3Checked(!tag3Checked)}
            color="#23a6f0"
          />
            <TextInput onChangeText={setTag3name} style={[styles.input, {flex:1}]} placeholder='Insert your tag here'/>
            <TouchableOpacity onPress={() => setEditTag(3)} style={{borderRadius:10, marginLeft:10, backgroundColor:tag3Color}}>
              <AntDesign name='edit' size={20} style={styles.editIcon}/>
            </TouchableOpacity>
        </View>

        <View style={styles.tagContainer}>
          <RNPCheckbox
            status={!tag4Checked ? "checked" : "unchecked"}
            onPress={() => setTag4Checked(!tag4Checked)}
            color="#23a6f0"
          />
            <TextInput onChangeText={setTag4name} style={[styles.input, {flex:1}]} placeholder='Insert your tag here'/>
            <TouchableOpacity onPress={() => setEditTag(4)} style={{borderRadius:10, marginLeft:10, backgroundColor:tag4Color}}>
              <AntDesign name='edit' size={20} style={styles.editIcon}/>
            </TouchableOpacity>
        </View>

        <Text style={styles.sectionText}>Prioryity: </Text>

        <View style={styles.prioryityContainer}>
          <TouchableOpacity 
            onPress={() => setPriority(1)} 
            style={[styles.prioryityItem, {borderWidth: priority===1?1:0}]}
          >
            <MaterialIcons style={{position:'relative'}} name='keyboard-arrow-up' size={30} color={'black'}/>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setPriority(2)} 
            style={[styles.prioryityItem, {borderWidth: priority===2?1:0}]}
          >
            <MaterialIcons style={{position:'relative', bottom:-10}} name='keyboard-arrow-up' size={30} color={'black'}/>
            <MaterialIcons style={{position:'relative', bottom:10}} name='keyboard-arrow-up' size={30} color={'black'}/>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setPriority(3)} 
            style={[styles.prioryityItem, {borderWidth: priority===3?1:0}]}
          >
            <MaterialIcons style={{position:'relative', bottom:-15}} name='keyboard-arrow-up' size={30} color={'black'}/>
            <MaterialIcons style={{position:'relative'}} name='keyboard-arrow-up' size={30} color={'black'}/>
            <MaterialIcons style={{position:'relative', bottom:15}} name='keyboard-arrow-up' size={30} color={'black'}/>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.sectionText}>Deadline: </Text>

        {showCalendar&&<View style={{flex:1, position:'absolute', width:'100%',height:'100%', alignItems:'center', justifyContent:'center',zIndex:10, backgroundColor:'rgb(250, 250, 250)'}}>
         <CalendarPicker
            onDateChange={(e) => {
              console.log(e.toDate())
              setStartDate(e.toDate())
              setShowCalendar(false)
            }}
            
          />
        </View>}
        <TouchableOpacity style={styles.datePicker} onPress={() => setShowCalendar(true)}>
          <Text>
            {startDate.toDateString()}
          </Text>
        </TouchableOpacity>


        
        {/* <View style={styles.addTagContainer}>
          <TextInput onChangeText={setNameTag} style={[styles.input, {flex:1}]} placeholder='Tag name'/>
          <TouchableOpacity disabled={description.length<1} style={styles.buttonTag} onPress={() => setShowColorPicker(true)}>
            <Text style={styles.textTag}>
              ADD TAG
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'gray', fontWeight:'300'}}>Your tags:</Text>
        <FlatList ItemSeparatorComponent={() =><View style={{width:10}}/>} horizontal data={tags} renderItem={({item, index}) => 
          <View key={index} style={[styles.tag, {backgroundColor: item.color}]}>
            <Text style={{color:'white'}}>#{item.name}</Text>
          </View>}
        /> */}

        <TouchableOpacity style={styles.finishButton} onPress={add}>
          <Text style={styles.addCardText}>Add card</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}
