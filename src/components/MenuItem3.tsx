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

type MenuItem3Type = {
  style?: StyleProp<ViewStyle>;
};

const MenuItem3 = ({ style }: MenuItem3Type) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.iconlylightfilter}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.chat, styles.ml16]}>Chat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_4xs,
  },
  iconlylightfilter: {
    width: 24,
    height: 24,
  },
  chat: {
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

export default MenuItem3;
