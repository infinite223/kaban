import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Pressable, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { Message } from '../../utils/types';
import { chatStyles } from './chatStyles';
import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

type Chanel = {
  name: string,
  id:string
}

const chanels:Chanel[] = [
  {name: 'Frontend', id:'1'},
  {name: 'Backend', id:'2'}
]

const messages:IMessage[] = [
  {_id:'1', createdAt: new Date, text: '', user: {_id:'', name:"", avatar: ''}},
  {_id:'2', createdAt: new Date, text: '', user: {_id:'', name:"", avatar: ''}},
]



export const ChatScreen = () => {
  const [selectedChanel, setSelectedChanel] = useState<Chanel>(chanels[0])
  const [messages, setMessages] = useState<IMessage[]>([])
  const navigation:any = useNavigation()
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <SafeAreaView style={chatStyles.container}>
      {/* <StatusBar backgroundColor='rgb(28, 28, 28)'/> */}
      <View style={chatStyles.nav}>
          {/* <View>Back icon</View> */}
            <TouchableOpacity
                style={{backgroundColor:'gray', padding:4, borderRadius:20, marginLeft:10}}
                onPress={() => navigation.navigate('Main')}
              >
                <Image
                  style={{width:20}}
                  resizeMode="cover"                
                  source={require("../../assets/materialsymbolsarrowback.png")}
                />
              </TouchableOpacity>
            <Text style={chatStyles.nameChanel}>{selectedChanel.name}</Text>
          </View>
      <View style={chatStyles.main}>
        <View style={chatStyles.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={(messages:[]) => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        </View>
        <View style={chatStyles.chanelsContainer}>
          <FlatList
            data={chanels}
            
            renderItem={({index, item}) => 
              <TouchableOpacity onPress={() => setSelectedChanel(item)} key={index} style={chatStyles.chanelCircle}>
                <Text style={chatStyles.chanelName}>
                  {item.name.substring(0,1)}
                </Text> 
              </TouchableOpacity>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
