import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Tag } from '../../utils/types'
import { ColorPickerModal } from './ColorPickerModal';

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
  const [showColorPicker, setShowColorPicker] = useState(false)
  console.log(tags)

  return (
    <View style={styles.container}>
      <ColorPickerModal setShowColorPicker={setShowColorPicker} showColorPicker={showColorPicker} name={name} setTags={setTags} tags={tags}/>
      <View style={styles.main}>
        <Text style={styles.headerText}>New card</Text>
        <TextInput style={styles.input} placeholder='Name card'/>
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
      </View>
      
    </View>
  )
}
