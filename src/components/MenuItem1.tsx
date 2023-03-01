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

type MenuItem1Type = {
  style?: StyleProp<ViewStyle>;
};

const MenuItem1 = ({ style }: MenuItem1Type) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.timeline, styles.ml16]}>Timeline</Text>
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
  timeline: {
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

export default MenuItem1;
