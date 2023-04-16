import { StyleSheet } from 'react-native'
import { Color } from '../../../GlobalStyles'

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    main: {
        flex:1,
        backgroundColor:'white',
        // padding:20,
        width:'100%'
    },
    headerText: {
        fontSize:25,
        textAlign:'center',
        fontWeight:'600',
        letterSpacing:1,
        alignItems:'flex-start',
        marginBottom:10
    },
    input: {
        fontSize:16,
        borderWidth:1,
        height:50,
        borderRadius:5,
        backgroundColor:Color.whitesmoke,
        borderColor:'white',
        marginVertical:3,
        padding:12,
    },
    addTagContainer: {
        flexDirection:'row',
        gap:10,
        marginVertical:10
    },
    tag: {
        borderRadius:5,
        padding:10,
        marginVertical:10,
        height:40,
    },
    buttonTag: {
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        height:40,
        borderRadius:5,
        backgroundColor:Color.darkslategray_100,
    },
    textTag: {
        color:'white'
    },
    finishButton: {
        position:'absolute',
        bottom:20,
        right:0,
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:10,
        backgroundColor:Color.black
    },
    addCardText: {
        color:'white',
        fontSize:19
    },
    tagContainer: {
        flexDirection:'row',
        alignItems:'center'
    },
    sectionText: {
        fontSize:15,
        marginVertical:5
    },
    editIcon: {
        padding:10
    },
    prioryityContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10
    },
    prioryityItem: {
        padding:10,
        borderRadius:10,
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    },
    datePicker: {
        padding:10,
        backgroundColor:Color.whitesmoke,
        borderRadius:5
    }
})