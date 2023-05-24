import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

export const Header:FC<{text:string}> = ({text}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {text}
       </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginHorizontal:15,
        marginVertical:10
    },
    headerText: {
        fontSize:22,
        fontWeight:'700'
    }
})
