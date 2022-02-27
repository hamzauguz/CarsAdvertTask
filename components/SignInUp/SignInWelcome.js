import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import propTypes from 'prop-types'

const SignInWelcome = ({ welcome, signUp, change }) => {
  return (
    <View style={styles.view5}>
      <Text style={styles.text2}>{welcome}</Text>
      <TouchableOpacity onPress={change}>
        <Text style={styles.blue}>{signUp}</Text>
      </TouchableOpacity>
    </View>
  )
}

SignInWelcome.propTypes = {
  welcome: propTypes.string,
  signUp: propTypes.string,
  change: propTypes.any,
}

const styles = StyleSheet.create({
  blue: { color: 'blue' },
  text2: {
    fontSize: 21,
    fontWeight: '600',
  },
  view5: { left: 40, top: 20 },
})

export default SignInWelcome
