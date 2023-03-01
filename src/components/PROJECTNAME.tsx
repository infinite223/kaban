import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

type PROJECTNAMEType = {
  style?: StyleProp<ViewStyle>;
};

const PROJECTNAME = ({ style }: PROJECTNAMEType) => {
  return <Text style={[styles.projectName, style]}> PROJECT NAME</Text>;
};

const styles = StyleSheet.create({
  projectName: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.darkslategray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 142,
    height: 36,
  },
});

export default PROJECTNAME;
