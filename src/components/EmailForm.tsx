import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Margin, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { 
  TextInput as RNPTextInput,
  Checkbox as RNPCheckbox,
 } from "react-native-paper";

const EmailForm = () => {
  const [formCheckInputchecked, setFormCheckInputchecked] = useState(false);

  return (
    <View style={[styles.groupParent]}>
      <View style={styles.yourEmailParent}>
        <Text style={[styles.yourEmail, styles.yourEmailTypo]}>
          Your email:
        </Text>
        <RNPTextInput
          style={[styles.formInput14, styles.formPosition]}
          placeholder="Email * "
          label="Email"
          mode="flat"
          placeholderTextColor="#737373"
          theme={{ colors: { text: "#737373" } }}
        />
      </View>
      <View style={[styles.yourEmailParent, styles.mt26]}>
        <Text style={[styles.yourEmail, styles.yourEmailTypo]}>Password:</Text>
        <RNPTextInput
          style={[styles.formInput14, styles.formPosition]}
          placeholder="Password* "
          label="Password"
          mode="flat"
          placeholderTextColor="#737373"
          theme={{ colors: { text: "#737373" } }}
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
    </View>
  );
};

const styles = StyleSheet.create({
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