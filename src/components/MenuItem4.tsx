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

type MenuItem4Type = {
  style?: StyleProp<ViewStyle>;
};

const MenuItem4 = ({ style }: MenuItem4Type) => {
  return (
    <View style={[styles.menuItem, style]}>
      <Image
        style={styles.iconlylightprofile}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.tables, styles.ml16]}>Tables</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_4xs,
  },
  iconlylightprofile: {
    width: 24,
    height: 24,
  },
  tables: {
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

export default MenuItem4;
