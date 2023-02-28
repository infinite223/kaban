import { StyleSheet } from "react-native";
import {
    Margin,
    FontSize,
    FontFamily,
    Border,
    Color,
    Padding,
  } from "../../../GlobalStyles";

export const startStyles = StyleSheet.create({
    signUpWithButton: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius: Border.br_lg,
        paddingHorizontal:25,
        paddingVertical:15,
        backgroundColor: Color.darkslategray,
    },  
    signUpWithPosition: {
        borderRadius: Border.br_lg,
        alignItems: "center",
        justifyContent: "space-between",
        borderColor:'#2b2d42',
        borderWidth:1,
        flexDirection:'row',
        paddingHorizontal:25,
        paddingVertical:10,
    },
    logosgoogleIcon: {

    },
    signUpWith1: {
        fontSize: FontSize.size_sm,
        textAlign: "center",
        fontFamily: FontFamily.latoBold,
        fontWeight: "700",
        color: Color.darkslategray,
    },
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

export const styles = StyleSheet.create({
    mt1: {
      marginTop: 1,
    },
    mt33: {
      marginTop: 33,
    },
    mt37: {
      marginTop: Margin.m_lg,
    },
    mt40: {
      marginTop: 40,
    },
    kabanParentFlexBox: {
      alignItems: "center",
      justifyContent: "center",
    },
    kabanFlexBox: {
      display: "flex",
      textAlign: "left",
      fontSize: FontSize.size_xl,
      alignItems: "center",
    },
    signUpWithTypo: {
      fontFamily: FontFamily.latoBold,
      fontWeight: "700",
    },
    text1Layout: {
      height: 47,
      width: 248,
    },
    groupLayout: {
      borderRadius: Border.br_lg,
    //   left: 0,   
    //   top: 0,
    //   position: "absolute",
        alignItems:'center',
        justifyContent:'center',
      height: 46,
      width: 248,
    },
    signUpWithPosition: {
      left: 0,
      top: 0,
      position: "absolute",
      height: 46,
      width: 248,
    },
    text1Typo: {
      fontSize: FontSize.size_sm,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
    },
    ka: {
      color: Color.darkslategray,
    },
    ban: {
      color: Color.crimson_100,
    },
    text: {
      color: Color.lightslategray_200,
    },
    kabanTxt: {
      lineBreak: "anywhere",
      width: "100%",
    },
    kaban: {
      fontWeight: "800",
      fontFamily: FontFamily.latoExtrabold,
      width: 89,
    },
    undrawEngineeringTeamA7n2Icon: {
      width: 219,
      height: 132,
      overflow: "hidden",
    },
    tutajWleciNasze: {
      width: 255,
      height: 49,
      color: Color.darkslategray,
    },
    letsMakeManaging: {
      fontSize: FontSize.size_lg,
      textAlign: "center",
      width: 248,
      color: Color.black,
      fontFamily: FontFamily.latoRegular,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    alreadyHaveAn: {
      color: Color.black,
    },
    alreadyHaveAnAccount: {
      fontFamily: FontFamily.latoRegular,
    },
    logIn1: {
      fontWeight: "600",
      fontFamily: FontFamily.latoSemibold,
    },
    logIn: {
      textDecoration: "underline",
      color: Color.crimson_200,
    },
    groupChild: {
      backgroundColor: Color.darkslategray,
    },
    signUpWith: {
      color: "#edf2f4",
      justifyContent: "center",
    },
    rectangleParent: {
      height: 46,
      width: 248,
    },
    kabanParent: {
      justifyContent: "center",
    },
    signUpWith1: {
      left: 26,
      width: 215,
      top: 0,
      position: "absolute",
      height: 46,
      fontSize: FontSize.size_sm,
      textAlign: "center",
      fontFamily: FontFamily.latoBold,
      fontWeight: "700",
      color: Color.darkslategray,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logosgoogleIcon: {
      top: 10,
      left: 20,
      width: 28,
      height: 28,
      position: "absolute",
      overflow: "hidden",
    },
    androidLarge1: {
      backgroundColor: Color.white,
      flex: 1,
      height: 800,
      paddingHorizontal: 49,
      paddingVertical: Padding.p_md,
      justifyContent: "center",
      overflow: "hidden",
      width: "100%",
    },
  });
  