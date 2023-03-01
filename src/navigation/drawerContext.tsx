import * as React from "react";
import { useState } from "react";
import FrameComponent3 from "../components/Frame3";
import FrameComponent4 from "../components/Frame2";
import FrameComponent2 from "../components/Frame4";
import FrameComponent1 from "../components/Frame5";
import FrameComponent from "../components/Frame6";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Margin,
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../GlobalStyles";

type AndroidLarge4Type = {
  state?: any;
  navigation?: any;
};

export const DrawerContent = ({ state, navigation }: AndroidLarge4Type) => {
  const [drawerItemsNormal] = useState([
    <FrameComponent3 style={styles.mt40} />,
    <FrameComponent2 style={styles.mt40} />,
    <FrameComponent1 style={styles.mt40} />,
    <FrameComponent style={styles.mt40} />,
  ]);
  const [drawerItemsActive] = useState([
    <FrameComponent4 style={styles.mt40} />,
    <FrameComponent3 style={styles.mt40} />,
    <FrameComponent2 style={styles.mt40} />,
    <FrameComponent1 style={styles.mt40} />,
  ]);
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState("");
  const stateIndex = !state ? 0 : state.index;
  return (
    <SafeAreaView style={styles.androidLarge4}>
      <View style={styles.view}>
        <View style={styles.wrappervariant2}>
          <View style={styles.kabanParent}>
            <Text style={styles.kaban}>
              <Text style={styles.ka}>Ka</Text>
              <Text style={styles.ban}>Ban.</Text>
            </Text>

            <Pressable style={[styles.wrapperFlexBox, styles.mt46]}>
              <Image
                style={styles.frameIcon}
                // resizeMode="cover"
                source={{uri: "https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?pid=ImgDet&rs=1"}}
              />
              <View style={[styles.adamMaysz, styles.ml12, styles.logoutTypo]}>
                <Text style={[styles.ml12, styles.logoutTypo, {textAlign:'left', color: 'gray',width: 111}]}>
                    Hello
                </Text>
           
                <Text style={[styles.adamMaysz, styles.ml12, styles.logoutTypo]}>
                    Adam Małysz
                </Text>
              </View>
            </Pressable>

            <View
              style={[
                styles.wrapper,
                {marginTop:30},
                styles.wrapperFlexBox,
                styles.wrapperFlexBox1,
              ]}
            >
              <DropDownPicker
                style={[styles.dropdownpicker, styles.vectorParentBorder]}
                open={frameDropdownOpen}
                items={[]}
                setOpen={setFrameDropdownOpen}
                value={frameDropdownValue}
                setValue={setFrameDropdownValue}
                placeholder=" PROJECT NAME"
                labelStyle={styles.frameDropdownValue}
                dropDownContainerStyle={styles.frameDropdowndropDownContainer}
              />
            </View>
           
            <View style={[styles.frameParent]}>
              {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
              {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
              {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
              {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
              {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
            </View>
        
            <Pressable
              style={[
                styles.vectorParent,
                {marginVertical:30},
                styles.vectorParentBorder,
                styles.wrapperFlexBox,
                styles.wrapperFlexBox1,
              ]}
            >
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
              <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
            </Pressable>
           
          </View>
          <View 
                style={{position:'absolute', bottom:35, left:15}}
            >
                <Text 
                    style={{color: 'gray'}}
                >
                    App version 1.0.1
                </Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#2b2d42",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Lato_bold",
  },
  frameDropdowndropDownContainer: {
    backgroundColor: "rgba(43, 45, 66, 0.03)",
    borderStyle: "solid",
    borderColor: "rgba(43, 45, 66, 0.2)",
    borderWidth: 1,
  },
  ml11: {
    marginLeft: Margin.m_5xs,
  },
  ml21: {
    marginLeft: Margin.m_xs,
  },
  mt40: {
    marginTop: Margin.m_xl,
  },
  ml12: {
    marginLeft: Margin.m_4xs,
  },
  mt46: {
    marginTop: Margin.m_2xl,
  },
  androidLarge4: {
    flex: 1,
    backgroundColor: Color.white,
  },
  wrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperFlexBox1: {
    width: 174,
    flexDirection: "row",
    justifyContent: "center",
  },
  vectorParentBorder: {
    borderWidth: 1,
    borderColor: "rgba(43, 45, 66, 0.2)",
    borderStyle: "solid",
  },
  logoutTypo: {
    display: "flex",
    fontSize: FontSize.size_base,
    color: Color.darkslategray_100,
    alignItems: "center",
  },
  ka: {
    color: Color.darkslategray_100,
  },
  ban: {
    color: Color.crimson_100,
  },
  kaban: {
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    textAlign: "left",
  },
  dropdownpicker: {
    backgroundColor: Color.darkslategray_200,
  },
  wrapper: {
    borderRadius: Border.br_xs,
    height: 55,
    // paddingLeft: Padding.p_3xs,
    // paddingRight: Padding.p_sm,
    borderStyle: "solid",
    width: 174,
  },
  frameParent: {
    width: 166,
    height: 352,
    alignItems: "flex-end",
  },
  frameIcon: {
    width: 50,
    height: 50,
    // overflow: "hidden",
  },
  adamMaysz: {
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
    width: 111,
    height: 40,
    textAlign: "left",
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  logout: {
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    textAlign: "center",
    width: 91,
    height: 24,
    justifyContent: "center",
  },
  vectorParent: {
    borderRadius: Border.br_md,
    backgroundColor: Color.darkslategray_300,
    height: 47,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: 0,
  },
  kabanParent: {
    width: 180,
    height: 717,
    justifyContent: "center",
    alignItems: "center",
  },
  wrappervariant2: {
    alignSelf: "stretch",
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.whitesmoke,
    height: 810,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_lg,
    overflow: "hidden",
    alignItems: "center",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

