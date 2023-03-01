import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontSize, FontFamily, Color } from "../../GlobalStyles";

type FrameComponent1Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent1 = ({ style }: FrameComponent1Type) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.vectorParent, style]}
      // onPress={() => navigation.navigate("AndroidLarge1")}
    >
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.timeline, styles.ml21]}>Timeline</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml21: {
    marginLeft: Margin.m_xs,
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  timeline: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    color: Color.darkslategray_100,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 111,
    height: 24,
  },
  vectorParent: {
    flexDirection: "row",
  },
});

export default FrameComponent1;
