import { StyleSheet } from "react-native";

export const startStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    h1Text: {
        fontSize:40
    },
    buttonsContainer: {
        flexDirection:'row',
        gap:10
    },
    main: {
        alignItems:'center',
        gap:15
    },
    text: {
        fontWeight:'300',
        fontSize:12     
    },
    button: {
        paddingHorizontal:25,
        paddingVertical:8,
        borderRadius:20,
        backgroundColor:'#25c'
    },
    buttonText: {
        fontSize:18,
        color:'white'
    },
    footer: {
       marginTop:40
    },
    footerText: {
        color: '#29f'
    }
});