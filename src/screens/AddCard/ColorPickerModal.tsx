import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { ColorPicker } from 'react-native-color-picker'
import { Tag } from '../../utils/types'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

interface Props { 
    // tags:Tag[], 
    // setTags: (value:Tag[]) => void,
    // name:string,
    setColor:(value:string) => void,
    showColorPicker: boolean,
    setShowColorPicker: (value: boolean) => void
}

export const ColorPickerModal:FC<Props> = ({setColor, setShowColorPicker, showColorPicker}) => {
    // const [color, setColor] = useState('')

  return (
    <View style={{alignItems:'center', justifyContent:'center', width:300, height:500, flex:1, position:'absolute', backgroundColor:'white', zIndex:4, borderWidth:1, borderColor:'rgba(11, 11, 11, .2)', padding:10}} >
       <TouchableOpacity style={{zIndex:5, position:'absolute', top:20, right:20}} onPress={() => setShowColorPicker(false)}>
        <EvilIcons name='close' size={30}/>
       </TouchableOpacity>
       <ColorPicker
            onColorSelected={color => {setColor(color); setShowColorPicker(false)}}
            style={{flex: 1, width:300}}

            defaultColor='red'
        />
        <View style={{position:'absolute', bottom:250}} 
            // onPress={() => }
        >
            <Text style={{fontSize:20, color:'white'}}>Tap</Text>
        </View>
    </View>
  )
}

