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

type MenuItemType = {
  style?: StyleProp<ViewStyle>;
};

const MenuItem = ({ style }: MenuItemType) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.settings, styles.ml16]}>Settings</Text>
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
  settings: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.latoSemibold,
    color: Color.darkslategray_300,
    textAlign: "left",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MenuItem;
