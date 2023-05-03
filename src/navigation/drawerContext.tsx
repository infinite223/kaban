import * as React from "react";
import { useState } from "react";
import MenuItem from "../components/MenuItem";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDrawerStatus } from '@react-navigation/drawer';

import {
  Margin,
  Color,
  FontSize,
  FontFamily,
  Border,
  Padding,
} from "../../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signOut } from "firebase/auth";
import { auth } from "../hooks/useAuth";
import { StatusBar } from "react-native";
import { useRoute } from '@react-navigation/native';
import useAuth from './../hooks/useAuth';
import { useSelector } from "react-redux";
import { selectBoardData, setSelectedBoard } from "../slices/boardDataSlice";
import { BoardKanban } from "../utils/types";
import { useDispatch } from "react-redux";
const settingsIcon = require('./../assets/vector1.png');
const addIcon = require('./../assets/add.png');
const timeLineIcon = require('./../assets/infographic.png');
const tablesIcon = require('./../assets/vector2.png');
const calendarIcon = require('./../assets/calendar.png');

type AndroidLarge4Type = {
  state?: any;
  navigation?: any;
};

export const DrawerContent = ({ state, navigation }: AndroidLarge4Type) => {
  // const { } = useDrawerStatus()
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const stateIndex = !state ? 0 : state.index;
  const boardsData = useSelector(selectBoardData)
  const route = useRoute();
  const dispatch = useDispatch()
  const { user }:any = useAuth()
  const projectsNames = boardsData.map((board:BoardKanban) => { return { label: board.name, value:board.name}})
  const [frameDropdownValue, setFrameDropdownValue] = useState(projectsNames[0].value);

  return (
    <SafeAreaView style={styles.androidLarge4}>
      {/* <StatusBar backgroundColor={Color.whitesmoke}/> */}
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
                source={{uri: user.profileImage?.length>1?user.profileImage:"https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?pid=ImgDet&rs=1"}}
              />
              <View style={[styles.adamMaysz, styles.ml12, styles.logoutTypo]}>
                <Text style={[styles.ml12, styles.logoutTypo, {textAlign:'left', color: 'gray',width: 111}]}>
                    Hello
                </Text>
           
                <Text style={[styles.adamMaysz, styles.ml12, styles.logoutTypo]}>
                    {user.name}
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
                items={projectsNames}
                setOpen={setFrameDropdownOpen}           
                value={frameDropdownValue}
                setValue={setFrameDropdownValue}
                onChangeValue={(e) => dispatch(setSelectedBoard(projectsNames.findIndex((s:any) => s.value === e)))}
                labelStyle={styles.frameDropdownValue}
                dropDownContainerStyle={styles.frameDropdowndropDownContainer}
              />
            </View>
           
            <View style={[styles.frameParent, {marginTop:60}]}>
              <MenuItem style={styles.mt40} name='Tables' navigateTo="Main" icon={tablesIcon}/>
              <MenuItem style={styles.mt40} name='Add board' navigateTo="CreateBoard" icon={addIcon}/>
              <MenuItem style={styles.mt40} name='Timeline' navigateTo="Timeline" icon={timeLineIcon}/>
              <MenuItem style={styles.mt40} name='Settings' navigateTo="Settings" icon={settingsIcon}/>
              <MenuItem style={styles.mt40} name='Calendar' navigateTo="Main" icon={calendarIcon}/>
            </View>
        
            <TouchableOpacity
              onPress={() => signOut(auth)}
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
            </TouchableOpacity>
           
          </View>
          {/* <View 
                style={{position:'absolute', bottom:15, left:15}}
            >
                <Text 
                    style={{color: 'gray'}}
                >
                    App version 1.0.1
                </Text>
            </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "red",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Lato_bold",
  },
  frameDropdowndropDownContainer: {
    backgroundColor: Color.lightslategray_200,
    borderStyle: "solid",
    borderColor: "rgba(43, 45, 66, 0.2)",
    zIndex:5,
    borderWidth: 1,
    color:'black'
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
    // position:'absolute',
    // zIndex:4,
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
    zIndex:7
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
    borderRadius:50
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
    // alignSelf: "stretch",
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.whitesmoke,
    flex:1,
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_lg,
    // overflow: "hidden",
    alignItems: "center",
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    flex:1
  },
});

