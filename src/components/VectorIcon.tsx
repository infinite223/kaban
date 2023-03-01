import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type VectorIconType = {
  style?: StyleProp<ViewStyle>;
};

const VectorIcon = ({ style }: any) => {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      resizeMode="cover"
      source={require("../assets/vector4.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 20,
    height: 20,
  },
});

export default VectorIcon;
