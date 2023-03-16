import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { settingsStyles } from './settingsStyles'
import { useNavigation } from '@react-navigation/native';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setStatusBar } from '../../slices/statusBar';
import { Color } from './../../../GlobalStyles';

const settingsOptions = [
    {text: 'Edit profile', navigateTo: 'EditUser'},
    {text: 'Rules', navigateTo: 'EditUser'},
    {text: 'Notification', navigateTo: 'EditUser'}
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
                renderItem={({item: {text, navigateTo}, index}) =>
                    <TouchableOpacity onPress={() =>  {navigation.navigate(navigateTo);   dispatch(setStatusBar(Color.crimson_100))
                }} key={index} style={settingsStyles.optionItem}>
                        <Text style={settingsStyles.optionText}>{text}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    </SafeAreaView>
  )
}

export default Settings