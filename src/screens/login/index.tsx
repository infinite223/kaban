import { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EmailForm from "../../components/EmailForm";
import {
  Margin,
  FontFamily,
  Border,
  Color,
  FontSize,
  Padding,
} from "../../../GlobalStyles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginScreen = () => {
  const navigation:any = useNavigation();
  

  return (
    <View style={styles.androidLarge3}>
      <View style={styles.frameParent}>
        <View style={styles.groupParent}>
          <View style={styles.groupContainer}>
            <Pressable
              style={styles.groupChildPosition}
              onPress={() => navigation.navigate("Start")}
            >
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <Image
                style={styles.materialSymbolsarrowBackIcon}
                resizeMode="cover"
                source={require("../../assets/materialsymbolsarrowback.png")}
              />
            </Pressable>
            <Text
              style={[
                styles.register,
                styles.kabanFlexBox,
                styles.registerTypo,
              ]}
            >
              Log In
            </Text>
          </View>
          <Text style={[styles.kaban, styles.ml18, styles.kabanFlexBox]}>
            <Text style={styles.kabanTxt}>
              <Text style={styles.ka}>Ka</Text>
              <Text style={styles.ban}>Ban</Text>
              <Text style={styles.text}>.</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.frameParent, styles.mt81]}>
          <Text style={[styles.loginToYour, styles.loginToYourFlexBox, {marginBottom:30}]}>
            Login to your account
          </Text>
          <EmailForm />
          <Pressable
            style={styles.mt89}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={[styles.youDontHaveContainer, styles.loginToYourFlexBox]}
            >
              <Text style={styles.kabanTxt}>
                <Text style={styles.youDontHaveAnAccount}>
                  <Text style={styles.youDontHave}>
                    You dont have an account?
                  </Text>
                  <Text>{` `}</Text>
                </Text>
                <Text style={styles.register1}>
                  <Text style={styles.registerTypo}>Register.</Text>
                </Text>
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml18: {
    marginLeft: Margin.m_2xs,
  },
  mt89: {
    marginTop: Margin.m_2xl,
  },
  mt81: {
    marginTop: Margin.m_xl,
  },
  groupChildPosition: {
    width: 36,
    left: 0,
    top: 0,
    position: "absolute",
    height: 36,
  },
  kabanFlexBox: {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  registerTypo: {
    fontFamily: FontFamily.latoSemibold,
    fontWeight: "600",
  },
  loginToYourFlexBox: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  groupChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.lightslategray_100,
  },
  materialSymbolsarrowBackIcon: {
    top: 6,
    left: 6,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  register: {
    top: 2,
    left: 57,
    fontSize: FontSize.size_lg,
    width: 96,
    height: 34,
    color: Color.black,
    position: "absolute",
  },
  groupContainer: {
    width: 153,
    height: 36,
  },
  ka: {
    color: '#333'
    // Color.darkslategray,
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
    fontSize: FontSize.size_xl,
    height: 36,
  },
  groupParent: {
    flexDirection: "row",
  },
  loginToYour: {
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    width: 252,
    height: 33,
    fontSize: FontSize.size_xl,
    color: Color.black,
    justifyContent: "center",
  },
  youDontHave: {
    color: Color.black,
  },
  youDontHaveAnAccount: {
    fontFamily: FontFamily.latoRegular,
  },
  register1: {
    textDecoration: "underline",
    color: Color.crimson_200,
  },
  youDontHaveContainer: {
    fontSize: FontSize.size_sm,
    width: 248,
    height: 47,
  },
  frameParent: {
    alignItems: "center",
  },
  androidLarge3: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_md,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
  },
});

