import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Padding, FontSize, FontFamily, Color } from "../../GlobalStyles";

type FrameComponent4Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent4 = ({ style }: FrameComponent4Type) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.frameParent, style]}
      // onPress={() => navigation.navigate("AndroidLarge1")}
    >
      <View style={styles.vectorWrapper}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Text style={[styles.tables, styles.ml11]}>Tables</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml11: {
    marginLeft: Margin.m_5xs,
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  vectorWrapper: {
    padding: Padding.p_xs,
    flexDirection: "row",
  },
  tables: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    color: Color.darkslategray_100,
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
