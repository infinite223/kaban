import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Margin, Padding, FontSize, FontFamily, Color } from "../../GlobalStyles";

type FrameComponent4Type = {
  style?: StyleProp<ViewStyle>;
};

export const FrameComponent4 = ({ style }: FrameComponent4Type) => {
  return (
    <View style={[styles.frameParent, style]}>
      <View style={styles.vectorWrapper}>
        {/* <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        /> */}
      </View>
      <Text style={[styles.tables, styles.ml11]}>Tables</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml11: {
    // marginLeft: Margin.m_4xs,
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  vectorWrapper: {
    padding: Padding.p_sm,
    flexDirection: "row",
  },
  tables: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    color: 'gray',
    textAlign: "left",
    display: "flex",
    width: 111,
    height: 24,
    alignItems: "center",
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default FrameComponent4;
