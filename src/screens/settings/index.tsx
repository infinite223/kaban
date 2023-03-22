import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { settingsStyles } from './settingsStyles'
import { useNavigation } from '@react-navigation/native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setStatusBar } from '../../slices/statusBar';
import { Color } from './../../../GlobalStyles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5' 
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons' 
import IoniconsIcon from 'react-native-vector-icons/Ionicons' 

const settingsOptions = [
    {text: 'Edit profile', navigateTo: 'EditUser', icon: <FontAwesome5Icon name='user-edit' size={17}/>},
    {text: 'Rules', navigateTo: 'EditUser', icon: <MaterialIconsIcon name='rule-folder' size={22}/>},
    {text: 'Notification', navigateTo: 'EditUser', icon: <IoniconsIcon name='notifications' size={22}/>}
]

const Settings = () => {
    const navigation:any = useNavigation()
    const dispatch = useDispatch()

    // useEffect(() => {
    //     setStatusBarBackgroundColor('white', true)
    
    // }, [navigation])

  return (
    <SafeAreaView style={settingsStyles.container} >
        <StatusBar backgroundColor='white' animated={true}/>
        <View style={settingsStyles.content}>
            <Text style={settingsStyles.headerText}>
                Settings
            </Text>

            <FlatList
                style={{flex:1, marginVertical:10}}
                data={settingsOptions}
                renderItem={({item: {text, navigateTo, icon}, index}) =>
                    <TouchableOpacity onPress={() =>  {navigation.navigate(navigateTo);   dispatch(setStatusBar(Color.crimson_100))
                }} key={index} style={settingsStyles.optionItem}>
                        {icon}
                        <Text style={settingsStyles.optionText}>{text}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    </SafeAreaView>
  )
}

export default Settings