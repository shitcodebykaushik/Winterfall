import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import pattern from '../AZNET/pattern.png'
const Welcome = () => {
  return (
    <View style = {styles.container}>
      <Image style={styles.patternbg}source= {pattern} />
      {/*<Text style = {styles.head}>HI</Text>*/} 
      <View style = {styles.container1}>
        <Text style={styles.head}>Welcome to m app</Text>
        </View>  
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({ 
    container: {
        width: '100%',
        height: '100%',
    },
    patternbg: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
    },
    head: {
      fontSize: 30,
      color: 'red'
    },
    container1: {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
})