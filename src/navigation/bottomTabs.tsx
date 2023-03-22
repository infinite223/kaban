import { View, StyleSheet, Text, TouchableOpacity, Keyboard } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState, useEffect } from 'react'
import { ChatScreen } from './../screens/chat/index';
import Settings from './../screens/settings/index';
import OcticonsIcons from 'react-native-vector-icons/Octicons' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import { Color } from '../../GlobalStyles';
import { useNavigation } from '@react-navigation/native';



const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    const navigation:any = useNavigation()

    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardStatus(true);
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardStatus(false);
      });
  
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    
    return !keyboardStatus?(
        <View style={styles.bottomTabsContainer}>
            <TouchableOpacity style={styles.tabContainer} onPress={() => navigation.navigate('Chat')}>
                <MaterialCommunityIcons name="message-text-outline" size={24}/>
                <Text style={styles.tabLabel}>Chat</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.tabContainer} onPress={() => navigation.navigate('Main')}>
                <MaterialCommunityIcons name="chart-box" size={25}/>
                <Text style={styles.tabLabel}>Boards</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabContainer}>
                <OcticonsIcons name="diff-added" size={22}/>
                <Text style={styles.tabLabel}>Add card</Text>
            </TouchableOpacity>
        </View>
  ):null
}

const styles = StyleSheet.create({ 
    bottomTabsContainer: {
        zIndex:1,
        backgroundColor:Color.whitesmoke,
        borderTopColor:'rgba(11, 11, 11, .1)',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    tabLabel: {
        color:'black'
    },
    tabContainer: {
        alignItems:'center',
        padding:10,
        gap:5
    }
})
