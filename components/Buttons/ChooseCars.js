import React from 'react'
import { Text, StyleSheet } from 'react-native'
import propTypes from 'prop-types'

const ChooseCars = ({ data }) => {
  return <Text style={styles.text}>{data}</Text>
}

ChooseCars.propTypes = {
  data: propTypes.string,
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 25,
  },
})
export default ChooseCars
