import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { startStyles, styles } from './startStyles';
import { useNavigation } from '@react-navigation/native';

export const StartScreen = () => {
  const navigation:any = useNavigation()
  return (
   
    <View style={[styles.androidLarge1, styles.kabanParentFlexBox]}>
    <View style={[styles.kabanParent, styles.kabanParentFlexBox]}>
      <Text style={[styles.kaban, styles.kabanFlexBox]}>
        <Text style={styles.kabanTxt}>
          <Text style={styles.ka}>Ka</Text>
          <Text style={styles.ban}>Ban</Text>
          <Text style={styles.text}>.</Text>
        </Text>
      </Text>
      <Image
        style={[styles.undrawEngineeringTeamA7n2Icon, styles.mt37]}
        resizeMode="cover"
        source={require("../../assets/undraw-engineering-team-a7n2-1-1.png")}
      />
      <View style={styles.mt37}>
        <Text
          style={[
            styles.tutajWleciNasze,
            styles.signUpWithTypo,
            styles.kabanFlexBox,
          ]}
        >
          Tutaj wleci nasze motto
        </Text>
        <Text
          style={[styles.letsMakeManaging, styles.mt1, styles.text1Layout]}
        >
          Lets make managing your projects easier
        </Text>
      </View>
      <View style={styles.mt37}>
        <Pressable onPress={() => 
           navigation.navigate("Login")
           }>
          <Text style={[styles.text1Typo, styles.text1Layout]}>
            <Text style={styles.kabanTxt}>
              <Text style={styles.alreadyHaveAnAccount}>
                <Text style={styles.alreadyHaveAn}>
                  Already have an account?
                </Text>
                <Text>{` `}</Text>
              </Text>
              <Text style={styles.logIn}>
                <Text style={styles.logIn1}>Log In.</Text>
              </Text>
            </Text>
          </Text>
        </Pressable>
        <TouchableOpacity
          style={[startStyles.signUpWithButton, styles.mt33]}
          onPress={() => navigation.navigate("Register")}
        >
          {/* <View style={[styles.groupChild, styles.groupLayout]} /> */}
          <Text
            style={[
              styles.signUpWith,
              // styles.signUpWithPosition,
              styles.text1Typo,
              styles.signUpWithTypo,
            ]}
          >
            Sign up with email.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={[styles.rectangleParent, styles.mt40]}>
      <TouchableOpacity style={startStyles.signUpWithPosition}>
        <Image
          style={startStyles.logosgoogleIcon}
          resizeMode="cover"
          source={require("../../assets/logosgoogleicon.png")}
        />
        <Text style={startStyles.signUpWith1}>Sign up with Google.</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}
