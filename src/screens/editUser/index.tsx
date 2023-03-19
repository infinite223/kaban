import React, { useState, useLayoutEffect, useEffect } from "react";
import { StyleSheet, View, Image, Text, Pressable, Dimensions, StatusBar, Alert, TouchableOpacity } from "react-native";
import {
  TextInput as RNPTextInput,
  Checkbox as RNPCheckbox,
} from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyles";

export const EditUser = ({navigation}:any) => {
  const [formCheckedCompany, setFormCheckedCompany] = useState(false);

  const dispatch = useDispatch()
  const { user, startUser, setUser }:any = useAuth()
  const [image, setImage] = useState<any>()

  const [name, setName] = useState('')
  const [loaction, setLoaction] = useState('')
  const [text, setText] = React.useState('');

  const hasUnsavedChanges = Boolean(text);

  // React.useEffect(
  //   () =>
  //     navigation.addListener('beforeRemove', (e:any) => {
  //       // if (!hasUnsavedChanges) {
  //       //   // If we don't have unsaved changes, then we don't need to do anything
  //       //   return;
  //       // }

  //       // Prevent default behavior of leaving the screen
  //       e.preventDefault();

  //       // Prompt the user before leaving the screen
  //       Alert.alert(
  //         'Update profil',
  //         'You can t back, if you dont update profile',
  //         [
  //           { text: "Don't leave", style: 'cancel', onPress: () => {} },
  //           {
  //             text: 'Discard',
  //             style: 'destructive',
  //             // If the user confirmed, then we dispatch the action we blocked earlier
  //             // This will continue the action that had triggered the removal of the screen
  //             onPress: () => navigation.dispatch(e.data.action),
  //           },
  //         ]
  //       );
  //     }),
  //   [navigation, hasUnsavedChanges]
  // );
      console.log(image)
  const tryUpdateProfile = () => {
    if(name.length > 3){
      updateProfile(setUser, image, user, name, formCheckedCompany?'user':'company', dispatch)
    }
    else {
      dispatch(setMessage({
        show:true,
        text:'Username is too short',
        type: '',
        data: {}
      }))
    }
  }

  return (
    <View style={styles.profileEdit}>
      <View style={[styles.profileEditChild, styles.groupChildPosition]} />
      <TouchableOpacity onPress={() => chooseImg(setImage)}>
        <Image
          style={styles.unsplashjmurdhtm7ngIcon}
          resizeMode="cover"
          source={image?{uri:image.uri}:require("../../assets/unsplashjmurdhtm7ng.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.editProfile, styles.updateTypo]}>Edit Profile</Text>

      <Pressable onPress={tryUpdateProfile} style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.groupChildPosition,
          ]}
        />
        <Text style={[ styles.updateTypo ]}>Update</Text>
      </Pressable>
      <Text style={[styles.changePicture, styles.phoneNumberTypo]}>
        Change Picture
      </Text>
      {!startUser&&<Image
        style={styles.ushareAltIcon}
        resizeMode="cover"
        source={require("../../assets/usharealt.png")}
      />}
      {!startUser&&
        <Pressable
          style={[styles.rectangleGroup, styles.groupLayout]}
          onPress={() => {navigation.goBack();  dispatch(setStatusBar('white'))
          }}
        >
          <View
            style={[
              styles.groupItem,
              styles.groupLayout,
              styles.groupChildPosition,
            ]}
          />
          <Image
            style={styles.materialSymbolsarrowBackIcon}
            resizeMode="cover"
            source={require("../../assets/materialsymbolsarrowback.png")}
          />
        </Pressable>
      }
      <View style={[styles.usernameParent, styles.parentLayout]}>
        <Text style={[styles.username, styles.usernameTypo]}>Username:</Text>
        <RNPTextInput
          style={styles.formInput14}
          placeholder="Username * "
          label="Username"
          onChangeText={setName}
          mode="outlined"
          placeholderTextColor="#737373"
          theme={{ colors: { text: "#737373" } }}
        />
      </View>
      <View style={[styles.localisationParent, styles.parentLayout]}>
        <Text style={[styles.username, styles.usernameTypo]}>
          Localisation:
        </Text>
        <RNPTextInput
          style={styles.formInput14}
          placeholder="Location * "
          label="Location"
          onChangeText={setLoaction}
          mode="outlined"
          placeholderTextColor="#737373"
          theme={{ colors: { text: "#737373" } }}
        />
      </View>
      <View style={[styles.formInput3, styles.formLayout, styles.formLayout1]}>
        <View
          style={[
            styles.formCheckInputParent,
            styles.formLayout,
            styles.groupChildPosition,
          ]}
        >
          <View style={[styles.formCheckInput, styles.groupChildPosition]}>
            <RNPCheckbox
              status={!formCheckedCompany ? "checked" : "unchecked"}
              onPress={() => setFormCheckedCompany(false)}
              color="#23a6f0"
            />
          </View>
          <Text style={[styles.formCheckLabel, styles.usernameTypo]}>
            Personal
          </Text>
        </View>
      </View>
      <View style={[styles.formInput31, styles.formLayout, styles.formLayout1]}>
        <View
          style={[
            styles.formCheckInputParent,
            styles.formLayout,
            styles.groupChildPosition,
          ]}
        >
          <View style={[styles.formCheckInput, styles.groupChildPosition]}>
            <RNPCheckbox
              status={formCheckedCompany ? "checked" : "unchecked"}
              onPress={() => setFormCheckedCompany(true)}
              color="#23a6f0"
            />
          </View>
          <Text style={[styles.formCheckLabel, styles.usernameTypo]}>
            Company
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  updateTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
    // fontSize: FontSize.size_mini,
    // position: "absolute",
  },
  phoneNumberTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 243,
    position: "absolute",
  },
  groupLayout: {
    height: 36,
    width: 34,
    position: "absolute",
  },
  parentLayout: {
    height: 88,
    width: 245,
    left: 70,
    position: "absolute",
  },
  usernameTypo: {
    lineHeight: 28,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  formLayout: {
    height: 28,
    position: "absolute",
  },
  formLayout1: {
    width: 104,
    top: 559,
    height: 28,
  },
  profileEditChild: {
    backgroundColor: Color.crimson_100,
    width: '100%',
    height: 188,
    position: "absolute",
    
  },
  unsplashjmurdhtm7ngIcon: {
    top: 117,
    left: 124,
    width: 142,
    height: 142,
    position: "absolute",
    borderRadius:150,
    borderColor:'white',
    borderWidth:5
  },
  editProfile: {
    top: 54,
    left: 155,
  },
  phoneNumber: {
    top: 462,
    left: 36,
    fontFamily: FontFamily.latoSemibold,
    display: "none",
    color: Color.black,
  },
  groupChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.darkslategray_100,
  },
  update: {
    top: 9,
    left: 113,
  },
  rectangleParent: {
    top: 664,
    left: 70,
    alignItems:'center',
    justifyContent:'center'
  },
  changePicture: {
    top: 259,
    left: 149,
    fontFamily: FontFamily.latoRegular,
    color: Color.black,
  },
  ushareAltIcon: {
    left: 350,
    width: 21,
    height: 21,
    top: 47,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    borderRadius: Border.br_md,
    backgroundColor: Color.lightslategray_100,
  },
  materialSymbolsarrowBackIcon: {
    top: 6,
    left: 6,
    width: 22,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    left: 31,
    top: 47,
  },
  username: {
    left: 3,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    width: 101,
    height: 33,
    color: Color.black,
  },
  formInput14: {
    top: 38,
    height: 50,
    width: 245,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  usernameParent: {
    top: 296,
  },
  localisationParent: {
    top: 412,
  },
  formCheckInput: {
    position: "absolute",
  },
  formCheckLabel: {
    left: 38,
    letterSpacing: 0,
    fontFamily: FontFamily.montserratRegular,
    color: Color.secondTextColor1,
    display: "flex",
    alignItems: "center",
    width: 80,
  },
  formCheckInputParent: {
    width: 118,
  },
  formInput3: {
    left: 70,
    width: 104,
    top: 559,
  },
  formInput31: {
    left: 197,
  },
  profileEdit: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 790,
    overflow: "hidden",
  },
});


























// import { View, Text, SafeAreaView, SafeAreaViewComponent, StatusBar } from 'react-native'
// import React from 'react'
// import { editUserStyles } from './editUserStyles'
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setStatusBar } from "../../slices/statusBar";
import useAuth from './../../hooks/useAuth';
import { setMessage } from "../../slices/messsageSlice";
import { chooseImg } from './../../utils/chooseImg';
import { updateProfile } from './../../firebase/updateProfile';

// const EditUser = () => {
//   return (
//     <SafeAreaView style={editUserStyles.container}>
//       {/* <StatusBar backgroundColor={'white'}/> */}
//       <View style={editUserStyles.content}>
//         <Text style={editUserStyles.headerText}>Edit profile</Text>
//       </View>
//       {/* profile image */}
//       {/* profile name */}
//       {/* opis */}
//     </SafeAreaView>
//   )
// }

// export default EditUser


