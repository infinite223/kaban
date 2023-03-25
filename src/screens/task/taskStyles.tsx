import { StyleSheet } from 'react-native'

export const taskStyles = StyleSheet.create({
    task: {
        flex:1,
        alignItems:'flex-start',
        // justifyContent:'center',
        paddingTop:20,
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
    },
    headerSubTasksText: {
        color:'gray',
        fontSize:20,
        textTransform:'uppercase',
        marginVertical:10
    }
})