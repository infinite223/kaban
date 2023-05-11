import { StyleSheet } from 'react-native'
import { Color, Padding } from '../../../GlobalStyles'

export const taskStyles = StyleSheet.create({
    task: {
        flex:1,
        alignItems:'flex-start',
        // justifyContent:'center',
        paddingTop:20,
        paddingHorizontal:20,
        backgroundColor:'white'
    },
    headerText:{
        fontSize:40,
        color:'red',
        textAlign:'center'
    },
    description: {
        fontSize:25,
        textAlign:'left',
        borderBottomColor:'rgba(30, 30, 30, .1)',
        borderBottomWidth:1,
        width:'100%',
        fontWeight:'700',
        paddingBottom:5
    },
    headerSubTasksText: {
        color:'gray',
        fontSize:20,
        marginVertical:10
    },
    footer: {
        marginVertical:10,
        backgroundColor:Color.darkslategray_200,
        borderRadius:10,
        padding:10,
        width:"100%"
    },
    createButton: {
        backgroundColor:Color.crimson_200,
        borderRadius:50,
        padding:7,
        alignItems:'center',
        alignSelf:'flex-end',
        marginTop:10,
        width:100
    },
    createButtonText: {
        color:'white',
        fontWeight:'bold',
        fontSize:15,
    },
    footerHeaderText: {
        fontSize:17,
        fontWeight:'500',
        margin:5
    },
    input: {
        borderColor:Color.lightslategray_200,
        borderWidth:1,
        marginVertical:4,
        borderRadius:10,
        padding:5,
        paddingHorizontal:14
    },
    subtask: {
        backgroundColor:Color.darkslategray_200,
        borderRadius:10,
        padding:10,
        marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    doneButton: {
        backgroundColor:Color.lightslategray_200,
        padding:0,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        width:50,
        height:30,
        alignSelf:'center'
    },
    titleSubtask: {
        fontSize:17,
        borderBottomColor:'rgba(30, 30, 30, .1)',
        borderBottomWidth:1,
        paddingBottom:5,
        fontWeight:'800',
        
    },
    descriptionSubtask: {
        marginTop:10
    }
})