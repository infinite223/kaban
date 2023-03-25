import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../GlobalStyles";
const heightScreen = Dimensions.get('screen').height
export const chatStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nav: {
      width:'100%',
      height:50,
      // backgroundColor:'gray'
      flexDirection:'row',
      borderBottomWidth:1,
      alignItems:'center',
      borderBottomColor:'rgba(11, 11, 11, .2)'
    },
    nameChanel: {
      fontSize:22,
      marginLeft:10
    },
    main: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    chatContainer: {
      width:'80%',
      flex:1
    },
    chanelsContainer: {
      width:60,
      backgroundColor: Color.whitesmoke,
      height: heightScreen-70,
      alignItems:'center',
      paddingTop:10,
    },
    chanelCircle: {
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:50,
      borderColor:'gray',
      borderWidth:1,
      margin:10
    },
    chanelName: {
      color: 'black',
      fontSize:20,

    }
});