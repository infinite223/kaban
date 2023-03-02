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


type FrameComponentType = {
  style?: StyleProp<ViewStyle>;
  name:string,
  navigateTo:string,
  icon:any
};

const MenuItem = ({ style, icon, name, navigateTo }: FrameComponentType) => {
  const navigation:any = useNavigation();

  return (
    <Pressable
      style={[styles.vectorParent, style]}
      onPress={() => navigation.navigate(navigateTo)}
    >
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={icon}
      />
      <Text style={[styles.settings, styles.ml21]}>{name}</Text>
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
  settings: {
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

export default MenuItem;
