import { StyleSheet } from 'react-native'

export const taskStyles = StyleSheet.create({
    task: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap:50,
        paddingHorizontal:30,
        backgroundColor:'white'
    },
    headerText:{
        fontSize:40,
        color:'red',
        textAlign:'center'
    },
    description: {
        fontSize:25,
        textAlign:'center'
    }
})