import React, { FC, useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector } from 'react-redux';
import { selectLoading } from './../slices/loadingSlice';

export const LoadingView = () => {
    const [spinner, setSpinner] = useState(true)
    const loadingData = useSelector(selectLoading)
    console.log(loadingData)
  return (
      <Spinner
          visible={loadingData.show}
          textContent={loadingData.message}
          textStyle={styles.spinnerTextStyle}
        />
  )
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
  });

