import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Pressable, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { Message } from '../../utils/types';
import { chatStyles } from './chatStyles';
import { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { addDoc, doc, collection, deleteDoc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import useAuth, { db } from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import boardDataSlice, { selectBoardData, selectSelectedBoard } from '../../slices/boardDataSlice';
import { Color } from '../../../GlobalStyles';

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
  const boardData = useSelector(selectBoardData)
  const selectedBoard = useSelector(selectSelectedBoard)
  const { user }:any = useAuth()  

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];    
    addDoc(collection(db,  'boards', boardData[selectedBoard].id, 'chats'), {
      _id,
      createdAt,
      text,
      user
    });
  }, []);

  useEffect(() => {
    const collectionRef = collection(db, 'boards', boardData[selectedBoard].id, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      );
    });

    return () => unsubscribe();
  }, [selectedBoard]);

  const clearChat = async () => {
    const collectionRef = collection(db, 'boards', boardData[selectedBoard].id, 'chats');

    const dataChats = await getDocs(collectionRef)
    
    if(dataChats) {
      dataChats.docs.map((_doc) => {
        deleteDoc(doc(db, 'boards', boardData[selectedBoard].id, 'chats', _doc.id))
      })  
    }
  }

  return (
    <SafeAreaView style={chatStyles.container}>
      {/* <StatusBar backgroundColor='rgb(28, 28, 28)'/> */}
      <View style={chatStyles.nav}>
          {/* <View>Back icon</View> */}
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
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
              <Text style={chatStyles.nameChanel}>{boardData[selectedBoard].name} chat</Text>
            </View>
             <TouchableOpacity 
              style={{borderRadius:50, marginHorizontal:15, paddingVertical:5, paddingHorizontal:15, backgroundColor: Color.whitesmoke}}
              onPress={() => clearChat()}
              >
                <Text style={{color:'black', fontSize:12, textTransform:'uppercase'}}>Clear</Text>
             </TouchableOpacity>
          </View>
      <View style={chatStyles.main}>
        <View style={chatStyles.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={(messages:[]) => onSend(messages)}
          user={{
            _id: user.uid,
            avatar:user.profileImage,
            name:user.name
          }}
        />
        </View>
        {/* <View style={chatStyles.chanelsContainer}>
          <FlatList
            data={chanels}
            renderItem={({index, item}) => 
              <TouchableOpacity onPress={() => setSelectedChanel(item)} key={index} style={chatStyles.chanelCircle}>
                <Text style={chatStyles.chanelName}>
                  {item.name.substring(0,1)}
                </Text> 
              </TouchableOpacity>}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
}
