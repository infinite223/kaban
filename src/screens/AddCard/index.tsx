import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Tag } from '../../utils/types'
import { ColorPickerModal } from './ColorPickerModal';
import { useDispatch } from 'react-redux';
import { setNewCard } from '../../slices/boardDataSlice';
import { useNavigation } from '@react-navigation/native';

// title: string;
// deadline: Date;
// subtasks: Subtask[];
// tags: Tag[];
// priority: string;
// assignedUser: User;
// boardKanban: BoardKanban;


export const AddCardScreen = () => {
  const [tags, setTags] = useState<Tag[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)
  
  const dispatch = useDispatch()
  const navigation:any = useNavigation()

  const add = () => {
    dispatch(setNewCard( {
      name,
      description,
      icon:'A',
      progressCount:0,
      tags
    }))

    setName('')
    setTags([])
    setDescription('')

    navigation.navigate('Main')
  }
  return (
    <View style={styles.container}>
      <ColorPickerModal setShowColorPicker={setShowColorPicker} showColorPicker={showColorPicker} name={name} setTags={setTags} tags={tags}/>
      <View style={styles.main}>
        <Text style={styles.headerText}>New card</Text>
        <TextInput onChangeText={setName} style={styles.input} placeholder='Name card'/>
        <TextInput textAlignVertical='top' onChangeText={setDescription} numberOfLines={3}  style={[styles.input, {marginTop:10, height:100}]} placeholder='Description'/>
        <View style={styles.addTagContainer}>
          <TextInput onChangeText={setName} style={[styles.input, {flex:1}]} placeholder='Tag name'/>
          <TouchableOpacity disabled={name.length<1} style={styles.buttonTag} onPress={() => setShowColorPicker(true)}>
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
        />

        <TouchableOpacity style={styles.finishButton} onPress={add}>
          <Text style={styles.addCardText}>Add card</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}
