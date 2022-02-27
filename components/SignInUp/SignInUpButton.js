import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import propTypes from 'prop-types'

const SignInUpButton = ({ giris, change }) => {
  return (
    <TouchableOpacity onPress={change} style={styles.touch1}>
      <Text style={styles.giris}>{giris}</Text>
    </TouchableOpacity>
  )
}
SignInUpButton.prototype = {
  giris: propTypes.string,
  change: propTypes.any,
}

const styles = StyleSheet.create({
  giris: { fontSize: 20, fontWeight: '400', color: 'white' },
  touch1: {
    height: 40,
    width: 200,
    backgroundColor: '#bb08cc',
    alignItems: 'center',
    justifyContent: 'center',
    left: 60,
    borderRadius: 20,
  },
})
export default SignInUpButton
