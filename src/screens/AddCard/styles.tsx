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
        fontSize:23,
        fontWeight:'600',
        alignItems:'flex-start',
        marginBottom:10
    },
    input: {
        fontSize:16,
        borderWidth:1,
        height:40,
        borderRadius:5,
        borderColor:'rgba(11, 11, 11, .3)',
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
    }
})