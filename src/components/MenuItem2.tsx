import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Margin, FontSize, FontFamily, Color } from "../../GlobalStyles";

type MenuItem2Type = {
  style?: StyleProp<ViewStyle>;
};

const MenuItem2 = ({ style }: MenuItem2Type) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.calendar, styles.ml16]}>Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_4xs,
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  calendar: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.latoSemibold,
    color: Color.darkslategray_300,
    textAlign: "left",
  },
  menuItem: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default MenuItem2;
