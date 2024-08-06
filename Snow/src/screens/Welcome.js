import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import pattern from '../AZNET/pattern.png'
const Welcome = () => {
  return (
    <View style = {styles.container}>
      <Image style={styles.patternbg}source= {pattern} />
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
    }
})