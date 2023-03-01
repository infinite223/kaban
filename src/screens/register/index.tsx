import { StatusBar } from 'expo-status-bar';
// import { loginStyles } from './loginStyles';
import { useState } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { 
  TextInput as RNPTextInput,
  Checkbox as RNPCheckbox,
 } from "react-native-paper";
import { CheckBox as RNKCheckBox } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../../../GlobalStyles";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


export const RegisterScreen = () => {
  const [formCheckInputchecked, setFormCheckInputchecked] = useState(false)
  const navigation:any = useNavigation();
  const [email, setEmail ] = useState('') 
  const [password, setPassword ] = useState('') 

  const signIn = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
  }
  
  return (
    <View style={styles.androidLarge2}>
      <View style={styles.frameParent}>
        <View style={styles.groupParent}>
          <View style={styles.groupContainer}>
            <Pressable
              style={styles.groupChildPosition}
              onPress={() => navigation.navigate('Start')}
            >
              <View style={[styles.groupChild, styles.groupChildPosition]} />
              <Image
                style={styles.materialSymbolsarrowBackIcon}
                resizeMode="cover"
                source={require("../../assets/materialsymbolsarrowback.png")}
              />
            </Pressable>
            <Text style={styles.logIn}>Log In</Text>
          </View>
          <Text style={[styles.kaban, styles.ml18]}>
            <Text style={styles.kabanTxt}>
              <Text style={styles.ka}>Ka</Text>
              <Text style={styles.ban}>Ban</Text>
              <Text style={styles.text}>.</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.frameParent, styles.mt81]}>
          <Text style={styles.createAccountWith}>
            Create account with email
          </Text>
          <View style={styles.mt34}>
            <View style={styles.yourEmailParent}>
              <Text
                style={[
                  styles.yourEmail,
                  styles.yourEmailTypo,
                  styles.yourEmailTypo1,
                ]}
              >
                Your email:
              </Text>
              <RNPTextInput
                style={[styles.formInput14, styles.formPosition]}
                placeholder="Email * "
                label="Email"
                mode="outlined"
                placeholderTextColor="#737373"
                theme={{ colors: { text: "#737373" } }}
              />
            </View>
            <View style={[styles.yourEmailParent, styles.mt20]}>
              <Text
                style={[
                  styles.yourEmail,
                  styles.yourEmailTypo,
                  styles.yourEmailTypo1,
                ]}
              >
                Password:
              </Text>
              <RNPTextInput
                style={[styles.formInput14, styles.formPosition]}
                placeholder="Password*"
                label="Password"
                mode="outlined"
                placeholderTextColor="#737373"
                theme={{ colors: { text: "#737373" } }}
              />
            </View>
            <View style={[styles.yourEmailParent, styles.mt20]}>
              <Text
                style={[
                  styles.retypePassword,
                  styles.yourEmailTypo,
                  styles.yourEmailTypo1,
                ]}
              >
                Retype Password:
              </Text>
              <RNPTextInput
                style={[styles.formInput14, styles.formPosition]}
                placeholder="Passowrd"
                label="Retype Password"
                mode="outlined"
                placeholderTextColor="#737373"
                theme={{ colors: { text: "#737373" } }}
              />
            </View>
          </View>
          <View style={[styles.formInput3, styles.mt34]}>
            <View style={[styles.formCheckInput, styles.formPosition]}>
              <RNPCheckbox
                status={formCheckInputchecked ? "checked" : "unchecked"}
                onPress={() => setFormCheckInputchecked(!formCheckInputchecked)}
                color="#23a6f0"
              />
            </View>
            <Text style={[styles.formCheckLabel, styles.yourEmailTypo]}>
              Accept our terms of use
            </Text>
          </View>
          <Pressable
            style={styles.mt34}
            onPress={() => navigation.navigate("AndroidLarge3")}
          >
            <Text style={styles.alreadyHaveAnContainer}>
              <Text style={styles.kabanTxt}>
                <Text style={styles.alreadyHaveAnAccount}>
                  <Text style={styles.alreadyHaveAn}>
                    Already have an account?
                  </Text>
                  <Text>{` `}</Text>
                </Text>
                <Text style={styles.logIn1}>
                  <Text style={styles.logIn2}>Log In.</Text>
                </Text>
              </Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  ml18: {
    marginLeft: Margin.m_2xs,
  },
  mt20: {
    marginTop: Margin.m_xs,
  },
  mt34: {
    marginTop: Margin.m_md,
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
  yourEmailTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  yourEmailTypo1: {
    letterSpacing: 1,
    left: 3,
    lineHeight: 28,
    fontSize: FontSize.size_base,
    height: 33,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    color: Color.black,
  },
  formPosition: {
    left: 0,
    position: "absolute",
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
  logIn: {
    top: 2,
    left: 57,
    fontSize: FontSize.size_lg,
    width: 96,
    height: 34,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.latoSemibold,
    fontWeight: "600",
    position: "absolute",
    alignItems: "center",
  },
  groupContainer: {
    width: 153,
    height: 36,
  },
  ka: {
    color: '#333'
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
    display: "flex",
    textAlign: "left",
    height: 36,
    alignItems: "center",
  },
  groupParent: {
    flexDirection: "row",
  },
  createAccountWith: {
    height: 33,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    width: 252,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    display: "flex",
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
  },
  yourEmail: {
    width: 97,
  },
  formInput14: {
    top: 38,
    height: 50,
    width: 252,
    left: 0,
    overflow: "hidden",
  },
  yourEmailParent: {
    height: 88,
    width: 252,
  },
  retypePassword: {
    width: 173,
  },
  formCheckInput: {
    top: 0,
    left: 0,
  },
  formCheckLabel: {
    left: 38,
    letterSpacing: 0,
    fontFamily: FontFamily.montserratRegular,
    color: Color.secondTextColor1,
    width: 210,
    lineHeight: 28,
    fontSize: FontSize.size_base,
    display: "flex",
    alignItems: "center",
  },
  formInput3: {
    height: 28,
    width: 248,
  },
  alreadyHaveAn: {
    color: Color.black,
  },
  alreadyHaveAnAccount: {
    fontFamily: FontFamily.latoRegular,
  },
  logIn2: {
    fontFamily: FontFamily.latoSemibold,
    fontWeight: "600",
  },
  logIn1: {
    textDecoration: "underline",
    color: Color.crimson_200,
  },
  alreadyHaveAnContainer: {
    fontSize: FontSize.size_sm,
    height: 47,
    width: 248,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  frameParent: {
    alignItems: "center",
  },
  androidLarge2: {
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
