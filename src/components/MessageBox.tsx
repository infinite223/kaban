import { View, Text, StyleSheet, Modal } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMessage, setMessage } from '../slices/messsageSlice'

export const MessageBox = () => {
    const message = useSelector(selectMessage)
    const dispatch = useDispatch()

    useEffect(() => {
      if(message.show){
        setTimeout(() => {
          dispatch(setMessage({ 
            show:false,
            text:'',
            type:'',
            data: {}}))
      }, 2000);
      }
    }, [message])

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={message.show}
        onRequestClose={() => {
        // setModalVisible(!show);
        }}
    >
      <View style={[styles.messageContainer, {display: 'flex'}]}> 
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
  </Modal>
  )
}


const styles = StyleSheet.create({
  messageContainer: {
    // width:"70%", 
    // height:200,
    position:'absolute',
    alignSelf:'center',
    bottom:50,
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor:'rgba(10, 10, 10, .15)',
    paddingHorizontal:20,
    paddingVertical:15,
    // borderColor:'gray',
    // borderWidth:2,
    borderRadius:10,
  },
  messageText: {
    color:'black',
    fontWeight: '700'
  }
})