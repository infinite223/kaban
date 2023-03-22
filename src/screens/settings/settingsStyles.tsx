import { StyleSheet,StatusBar } from "react-native";

export const settingsStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
    },
    headerText: {
        fontSize:30
    },
    content: {
        flex:1,
        paddingHorizontal:20,
        paddingVertical:10
    },
    optionItem: {
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        flex:1,
        paddingHorizontal:15,
        paddingVertical:8,
        backgroundColor: 'rgba(20, 20, 20, .05)',
        marginVertical:5,
        borderRadius:5
    },
    optionText: {
        fontSize:18
    }
})