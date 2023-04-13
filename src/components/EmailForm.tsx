import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Margin, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { 
  TextInput as RNPTextInput,
  Checkbox as RNPCheckbox,
 } from "react-native-paper";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { setMessage } from "../slices/messsageSlice";
import { setLoading } from "../slices/loadingSlice";

const EmailForm = () => {
  const [formCheckInputchecked, setFormCheckInputchecked] = useState(false);
  const [email, setEmail ] = useState('') 
  const [password, setPassword ] = useState('') 
  const dispatch = useDispatch()

  const login = () => {
    if(email.length > 2 && password.length > 2)
    {
      dispatch(setLoading({show:true, message: 'Loading'}))
      signInWithEmailAndPassword(auth, email, password)
      .then((res) =>{
        console.log(res)
        dispatch(setLoading({show:false, message: ''}))
      }).catch((err) =>{
        dispatch(setLoading({show:false, message: ''}))
        dispatch(setMessage({ 
          show:true,
          text:'Login error, incorrect data',
          type:'',
          data: {}}))
      } 
      )
    }
    else {
      dispatch(setLoading({show:false, message: ''}))

      dispatch(setMessage({ 
        show:true,
        text:'No complete data',
        type:'',
        data: {}})
      )
    }
  }

  console.log(email)
  return (
    <View style={[styles.groupParent]}>
      <View style={styles.yourEmailParent}>
        <Text style={[styles.yourEmail, styles.yourEmailTypo]}>
          Your email:
        </Text>
        <RNPTextInput
          style={[styles.formInput14, styles.formPosition]}
          placeholder="Email * "
          onChangeText={setEmail}
          label="Email"
          mode="outlined"
          placeholderTextColor="#737373"
          theme={{ colors: { text: "#737373" } }}
          outlineStyle={{borderColor:'#bbb', backgroundColor:'rgba(250, 250, 250, 1)'}}
          />
      </View>
      <View style={[styles.yourEmailParent, styles.mt26]}>
        <Text style={[styles.yourEmail, styles.yourEmailTypo]}>Password:</Text>
        <RNPTextInput
          style={[styles.formInput14, styles.formPosition]}
          onChangeText={setPassword}
          placeholder="Password* "
          label="Password"
          mode="outlined"
          textContentType="password"
          secureTextEntry
          placeholderTextColor="#bbb"
          theme={{ colors: { text: "#737373" } }}
          outlineStyle={{borderColor:'#bbb', backgroundColor:'rgba(250, 250, 250, 1)'}}
          />
      </View>
      <View style={[styles.formInput3, styles.mt26]}>
       <RNPCheckbox
          status={formCheckInputchecked ? "checked" : "unchecked"}
          onPress={() => setFormCheckInputchecked(!formCheckInputchecked)}
          color="#23a6f0"
        />
        <Text style={[styles.formCheckLabel, styles.yourEmailTypo]}>
          Don’t log me out
        </Text>
      </View>
      <TouchableOpacity onPress={login} style={styles.loginButton}>
        <Text style={styles.loginText}>Login with your email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    paddingVertical:15,
    borderRadius: Border.br_lg,
    backgroundColor: "#333",
    paddingHorizontal:25,
    width:240,
    marginTop:30
  },
  loginText: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    color: Color.white,
  },
  mt26: {
    marginTop: Margin.m_sm,
  },
  yourEmailTypo: {
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.size_base,
    position: "absolute",
    top: 0,
  },
  formPosition: {
    left: 0,
    position: "absolute",
  },
  yourEmail: {
    left: 3,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.black,
    width: 97,
    height: 33,
  },
  formInput14: {
    top: 38,
    height: 50,
    overflow: "hidden",
    width: 252,
  },
  yourEmailParent: {
    height: 88,
    width: 252,
  },
  formCheckInput: {
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: "#23a6f0",
    borderWidth: 1,
    top: 0,
    left: 0,
  },
  formCheckLabel: {
    left: 38,
    letterSpacing: 0,
    fontFamily: FontFamily.montserratRegular,
    color: Color.secondTextColor1,
    display: "flex",
    width: 210,
    alignItems: "center",
  },
  formInput3: {
    width: 248,
    height: 28,
  },
  groupParent: {
    alignItems: "center",
  },
});

export default EmailForm;
